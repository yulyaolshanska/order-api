import axios from "axios";

import { CreateOrderRequestDto, Order } from "../types/order";
import { API_BASE } from "../constants/constants";

export const createOrder = async (data: CreateOrderRequestDto) => {
  return await axios.post(`${API_BASE}/orders`, data);
};

export const getUserOrders = async (userId: string): Promise<Order[]> => {
  const response = await axios.get(`${API_BASE}/orders/${userId}`);

  return response.data;
};
