import { FC } from "react";

import styles from "./OrderTable.module.css";
import { Order } from "../../types/order";

type Props = {
  orders: Order[];
};
const OrderTable: FC<Props> = ({ orders }) => {
  return (
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
  );
};

export default OrderTable;
