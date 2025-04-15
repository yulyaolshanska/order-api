import { useEffect } from "react";

import OrderTable from "../components/orderTable/OrderTable";
import { useAppDispatch } from "../hooks/hooks";
import { fetchUserOrders } from "../app/orders/orderThunks";

const userId = "123e4567-e89b-12d3-a456-426614174000";

const OrdersPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserOrders(userId));
  }, [dispatch]);

  return <OrderTable />;
};

export default OrdersPage;
