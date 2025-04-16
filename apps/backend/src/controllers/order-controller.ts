import { Request, Response } from "express";

import { AppDataSource } from "../db/data-source";
import { User, Product, Order } from "../entities/entities";
import { logger } from "../utils/logger";
import { ApiResponseMessage } from "../constants/enums";

export const createOrder = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { userId, productId, quantity } = req.body;

  const userRepo = AppDataSource.getRepository(User);
  const productRepo = AppDataSource.getRepository(Product);
  const orderRepo = AppDataSource.getRepository(Order);

  try {
    const user = await userRepo.findOneBy({ id: userId });
    const product = await productRepo.findOneBy({ id: productId });

    if (!user || !product) {
      res.status(404).json({ message: ApiResponseMessage.NOT_FOUND });
      return;
    }

    const totalCost = product.price * quantity;

    if (user.balance < totalCost) {
      res
        .status(403)
        .json({ message: ApiResponseMessage.INSUFFICIENT_BALANCE });
      return;
    }

    if (product.stock < quantity) {
      res.status(403).json({ message: ApiResponseMessage.OUT_OF_STOCK });
      return;
    }

    await AppDataSource.transaction(async (manager) => {
      user.balance -= totalCost;
      product.stock -= quantity;

      await manager.save(user);
      await manager.save(product);

      const order = orderRepo.create({
        user,
        product,
        quantity,
        totalPrice: totalCost,
      });

      await manager.save(order);
    });

    res.status(201).json({ message: ApiResponseMessage.ORDER_CREATED });
  } catch (err) {
    logger?.error?.(ApiResponseMessage.ORDER_CREATE_FAIL, err);
    res.status(500).json({ message: ApiResponseMessage.ORDER_CREATE_FAIL });
  }
};

export const getUserOrders = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { userId } = req.params;

  if (!userId) {
    res.status(400).json({ message: ApiResponseMessage.USER_ID_REQUIRED });
    return;
  }

  try {
    const orders = await AppDataSource.getRepository(Order).find({
      where: { user: { id: userId } },
      relations: ["user", "product"],
    });

    res.json(orders);
  } catch (err) {
    logger?.error?.(ApiResponseMessage.ORDER_FETCH_FAIL, err);
    res.status(500).json({ message: ApiResponseMessage.ORDER_FETCH_FAIL });
  }
};
