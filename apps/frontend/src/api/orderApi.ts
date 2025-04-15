import axios from "axios";

import { CreateOrderRequestDto, Order } from "../types/order";

const API_BASE = "http://localhost:3000/api";

export const createOrder = async (data: CreateOrderRequestDto) => {
  return axios.post(`${API_BASE}/orders`, data);
};

export const getUserOrders = async (userId: string): Promise<Order[]> => {
  const response = await axios.get(`${API_BASE}/orders/${userId}`);

  return response.data;
};
