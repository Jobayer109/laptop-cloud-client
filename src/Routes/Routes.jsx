import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AddProduct from "../Pages/Dashboard/AddProduct";
import AllAdmin from "../Pages/Dashboard/AllAdmin";
import AllUsers from "../Pages/Dashboard/AllUsers";
import MyOrders from "../Pages/Dashboard/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts";
import MyWishlist from "../Pages/Dashboard/MyWishlist";
import Payment from "../Pages/Dashboard/Payment";
import Sellers from "../Pages/Dashboard/Sellers";
import Home from "../Pages/Home/Home";
import LaptopDetails from "../Pages/Home/LaptopDetails";
import Laptops from "../Pages/Home/Laptops";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Blogs from "../Pages/Shared/Blogs";
import ContactUs from "../Pages/Shared/ContactUs";
import ErrorPage from "../Pages/Shared/ErrorPage";
import Profile from "../Pages/Shared/Profile";
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
        path: "/laptop/:id",
        element: <LaptopDetails></LaptopDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/laptop/${params.id}`),
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "contact",
        element: <ContactUs />,
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
      {
        path: "/dashboard/wishList",
        element: <MyWishlist />,
      },
      {
        path: "/dashboard/myProducts",
        element: (
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
        path: "/dashboard/allAdmin",
        element: (
          <AdmitRoute>
            <AllAdmin />
          </AdmitRoute>
        ),
      },
      {
        path: "/dashboard/sellers",
        element: (
          <AdmitRoute>
            <Sellers />
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
