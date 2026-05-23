import { BrowserRouter, createBrowserRouter } from "react-router";
import Home from "./features/home/Home";
import Login from "./features/auth/Login";
import SignUp from "./features/auth/SignUp";
import Shop from "./features/shop/Shop";
import Dashboard from "./features/admin/pages/Dashboard";
import Product from "./features/admin/pages/Product";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <SignUp />
    },
    {
        path: "/shop",
        element: <Shop />
    },
    {
        path: '/admin/dashboard',
        element: <Dashboard />
    },
    {
        path: '/admin/product',
        element: <Product />
    }
])