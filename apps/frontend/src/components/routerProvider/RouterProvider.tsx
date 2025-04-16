import {
  RouterProvider as LibraryRouterProvider,
  createBrowserRouter,
  RouteObject,
} from "react-router-dom";

type Props = {
  routes: RouteObject[];
};

const RouterProvider = ({ routes }: Props) => {
  const router = createBrowserRouter(routes);

  return <LibraryRouterProvider router={router} />;
};

export { RouterProvider };
