import { FC } from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import styles from "./OrderTable.module.css";

const OrderTable: FC = () => {
  const { orders, loading, error } = useAppSelector((state) => state.order);

  return (
    <>
      {loading && <p>Loading orders...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {orders && (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price per unit</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.product.name}</td>
                <td>{order.quantity}</td>
                <td>${order.product.price}</td>
                <td>${order.totalPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default OrderTable;
