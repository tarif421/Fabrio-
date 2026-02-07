import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";

import AuthLayout from "../Layouts/AuthLayout";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import ProductDetails from "../Pages/ProductDetails";
import Booking from "../Pages/Booking";
import Layout from "../Layouts/DashboardLayout/Layout";
import ManageUsers from "../Layouts/DashboardLayout/Manageusers";
import AllProducts from "../Layouts/DashboardLayout/AllProduct";
import Allproducts from "../Pages/Allproducts";
import AllOrders from "../Layouts/DashboardLayout/AllOrders";

import Setting from "../Layouts/DashboardLayout/Setting";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allProducts",
        element: <Allproducts />,
      },
      {
        path: "/Details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/productsDetails/${params.id}`),
        element: <ProductDetails />,
      },
      {
        path: "/booking",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/productsDetails/${params.id}`),
        element: <Booking></Booking>,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      // {
      //   index: true,
      //   element: <ManageUsers />,
      // },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
      {
        path: "all-product",
        element: <AllProducts />,
      },
      {
        path: "all-orders",
        element: <AllOrders />,
      },
      {
        path: "settings",
        element: <Setting />,
      },
    ],
  },
]);
