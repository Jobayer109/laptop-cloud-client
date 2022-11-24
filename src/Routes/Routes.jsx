import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import MyOrders from "../Pages/Dashboard/MyOrders";
import Home from "../Pages/Home/Home";
import Laptops from "../Pages/Home/Laptops";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import ErrorPage from "../Pages/Shared/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <Laptops />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorPage />,
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <MyOrders />,
      },
    ],
  },
]);

export default router;
