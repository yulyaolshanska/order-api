import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";

import { AppPath } from "./constants/enums/enums";
import { Layout } from "./components/layout/Layout";
import { RouterProvider } from "./components/routerProvider/RouterProvider";
import { Loader } from "./components/loader/Loader";
import { CustomToastContainer } from "./components/notification/Notification";

const CreateOrder = lazy(() => import("./pages/CreateOrderPage"));
const Orders = lazy(() => import("./pages/UserOrdersPage"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <RouterProvider
          routes={[
            {
              path: AppPath.HOME,
              element: <Layout />,
              children: [
                {
                  path: AppPath.HOME,
                  element: <Orders />,
                },
                {
                  path: AppPath.CREATE_ORDER,
                  element: <CreateOrder />,
                },
                {
                  path: AppPath.ANY,
                  element: <Navigate to={AppPath.HOME} replace />,
                },
              ],
            },
          ]}
        />
      </Suspense>
      <CustomToastContainer />
    </>
  );
}

export default App;
