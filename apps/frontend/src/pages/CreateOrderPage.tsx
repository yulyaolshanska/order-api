import { OrderForm } from "../components/orderForm/OrderForm";
import styles from "../styles/common.module.css";

const CreateOrderPage: React.FC = () => {
  return (
    <>
      <h1 className={styles.title}>Create Order</h1>
      <OrderForm />
    </>
  );
};

export default CreateOrderPage;
