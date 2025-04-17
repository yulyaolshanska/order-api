import { useEffect } from "react";

import OrderTable from "../components/orderTable/OrderTable";
import { useAppDispatch } from "../hooks/hooks";
import { fetchUserOrders } from "../app/orders/orderThunks";
import { USER_ID } from "../constants/constants";

const OrdersPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserOrders(USER_ID));
  }, [dispatch]);

  return <OrderTable />;
};

export default OrdersPage;
