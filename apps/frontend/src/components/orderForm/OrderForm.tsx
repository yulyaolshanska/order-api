import { useForm } from "react-hook-form";

import { createOrder } from "../../api/orderApi";
import type { CreateOrderRequestDto } from "../../types/types";
import styles from "./OrderForm.module.css";
import { getErrorMessage, notifyError, notifySuccess } from "../../utils/utils";

export const OrderForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateOrderRequestDto>();

  const onSubmit = async (data: CreateOrderRequestDto) => {
    try {
      await createOrder(data);
      reset();
      notifySuccess("Order created successfully!");
    } catch (error: any) {
      const message = getErrorMessage(error.response.data.message);
      notifyError(message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.inputGroup}>
        <label className={styles.label}>User ID</label>
        <input
          className={styles.input}
          {...register("userId", { required: "User ID is required" })}
        />
        {errors.userId && (
          <p className={styles.error}>{errors.userId.message}</p>
        )}
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Product ID</label>
        <input
          className={styles.input}
          {...register("productId", { required: "Product ID is required" })}
        />
        {errors.productId && (
          <p className={styles.error}>{errors.productId.message}</p>
        )}
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Quantity</label>
        <input
          type="number"
          className={styles.input}
          {...register("quantity", {
            required: "Quantity is required",
            min: { value: 1, message: "Quantity must be at least 1" },
          })}
        />
        {errors.quantity && (
          <p className={styles.error}>{errors.quantity.message}</p>
        )}
      </div>

      <button type="submit" className={styles.submitBtn}>
        Submit Order
      </button>
    </form>
  );
};
