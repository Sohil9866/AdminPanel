import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from "./components/loginForm.jsx";
import SignupForm from "./components/SignUp.jsx";
import Layout from "./Layout.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Orders from "./pages/Orders.jsx";
import Employees from "./pages/Employees.jsx";
import EndUsers from "./pages/EndUsers.jsx";
import Resturants from "./pages/Resturants.jsx";
import Insights from "./pages/Insights.jsx";
import Menus from "./pages/Menu.jsx";
import Settings from "./pages/Settings.jsx";
import OrderDetails from "./components/OrderDetails.jsx";
import EditEmployee from "./components/models/EditEmployee.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/employees",
        element: <Employees />,
      },
      {
        path: "/employees/edit-employee/:id",
        element: <EditEmployee />,
      },
      {
        path: "/endusers",
        element: <EndUsers />,
      },
      {
        path: "/resturants",
        element: <Resturants />,
      },
      {
        path: "/insights",
        element: <Insights />,
      },
      {
        path: "/menu",
        element: <Menus />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/orders/orderdetails/:id",
        element: <OrderDetails/>
      },
    ],
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/signup",
    element: <SignupForm />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
