import { useEffect } from "react";

import OrderTable from "../components/orderTable/OrderTable";
import { useAppDispatch } from "../hooks/hooks";
import { fetchUserOrders } from "../app/orders/orderThunks";
import { USER_ID } from "../constants/constants";
import { useAppSelector } from "../hooks/hooks";
import { Loader } from "../components/loader/Loader";
import styles from "../styles/common.module.css";

const OrdersPage = () => {
  const dispatch = useAppDispatch();
  const { orders, loading, error } = useAppSelector((state) => state.order);
  const canShowTable = orders.length > 0 && !loading && !error;

  useEffect(() => {
    dispatch(fetchUserOrders(USER_ID));
  }, [dispatch]);

  return (
    <>
      {loading && <Loader />}
      {error && <p className={styles.error}>{error}</p>}
      {canShowTable ? (
        <OrderTable orders={orders} />
      ) : (
        <p className={styles.empty}>You don't have any orders yet.</p>
      )}
    </>
  );
};

export default OrdersPage;
