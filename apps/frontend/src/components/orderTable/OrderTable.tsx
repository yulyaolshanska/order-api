import { FC } from "react";

import { useAppSelector } from "../../hooks/reduxHooks";
import styles from "./OrderTable.module.css";
import { Loader } from "../loader/Loader";

const OrderTable: FC = () => {
  const { orders, loading, error } = useAppSelector((state) => state.order);

  return (
    <>
      {loading && <Loader />}
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
            {orders.map(({ id, product, quantity, totalPrice }) => (
              <tr key={id}>
                <td>{product.name}</td>
                <td>{quantity}</td>
                <td>${product.price}</td>
                <td>${totalPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default OrderTable;
