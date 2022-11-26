import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AddProduct from "../Pages/Dashboard/AddProduct";
import AllUsers from "../Pages/Dashboard/AllUsers";
import MyOrders from "../Pages/Dashboard/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts";
import Payment from "../Pages/Dashboard/Payment";
import Home from "../Pages/Home/Home";
import Laptops from "../Pages/Home/Laptops";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Blogs from "../Pages/Shared/Blogs";
import ErrorPage from "../Pages/Shared/ErrorPage";
import AdmitRoute from "./AdmitRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

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
      {
        path: "blogs",
        element: <Blogs />,
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyOrders />,
      },
      {
        path: "/dashboard/myProducts",
        element: (
          <AdmitRoute>
            <MyProducts />
          </AdmitRoute>
        ) || (
          <SellerRoute>
            <MyProducts />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/addProduct",
        element: (
          <SellerRoute>
            <AddProduct />
          </SellerRoute>
        ) && (
          <AdmitRoute>
            <AddProduct />
          </AdmitRoute>
        ),
      },
      {
        path: "/dashboard/users",
        element: (
          <AdmitRoute>
            <AllUsers />
          </AdmitRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment />,
        loader: ({ params }) => fetch(`http://localhost:5000/orders/${params.id}`),
      },
    ],
  },
]);

export default router;
