import { createAsyncThunk } from "@reduxjs/toolkit";

import { createOrder, getUserOrders } from "../../api/orderApi";
import { CreateOrderRequestDto, Order } from "../../types/types";

export const submitOrder = createAsyncThunk<
  void,
  CreateOrderRequestDto,
  { rejectValue: string }
>("order/submitOrder", async (data, { rejectWithValue }) => {
  try {
    await createOrder(data);
  } catch (err: any) {
    return rejectWithValue(
      err.response?.data?.message || "Something went wrong",
    );
  }
});

export const fetchUserOrders = createAsyncThunk<Order[], string>(
  "order/fetchUserOrders",
  async (userId) => {
    const response = await getUserOrders(userId);

    return response;
  },
);
