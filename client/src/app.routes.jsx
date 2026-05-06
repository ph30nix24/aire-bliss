import { createBrowserRouter } from "react-router";
import Home from "./features/home/Home";
import Login from "./features/auth/Login";
import SignUp from "./features/auth/SignUp";
import Shop from "./features/shop/Shop";

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
    }
])