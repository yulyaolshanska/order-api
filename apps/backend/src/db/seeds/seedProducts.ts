import { AppDataSource } from "../data-source";
import { Product } from "../../entities/entities";

const initialProducts = [
  {
    id: "8c32ff73-bad8-4e5e-88d2-4e27a1cb62f2",
    name: "Keyboard",
    price: 100,
    stock: 20,
  },
  {
    id: "8c32ff73-bad8-4e5e-99d2-4907a1cb62f2",
    name: "Mouse",
    price: 50,
    stock: 40,
  },
  {
    id: "1c32ff73-bad8-4e5e-88d2-4e27a1cb62f2",
    name: "Monitor",
    price: 300,
    stock: 10,
  },
];

export const seedProducts = async () => {
  const productRepo = AppDataSource.getRepository(Product);

  for (const data of initialProducts) {
    const exists = await productRepo.findOneBy({ name: data.name });

    if (!exists) {
      const product = productRepo.create(data);
      await productRepo.save(product);
      console.log(`✅ Product "${data.name}" created`);
    } else {
      console.log("ℹ️ Product already exists:", exists.name);
    }
  }
};
