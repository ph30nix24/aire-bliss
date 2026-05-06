import { createBrowserRouter } from "react-router";
import Home from "./features/home/Home";
import Login from "./features/auth/Login";
import SignUp from "./features/auth/SignUp";

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
    }
])