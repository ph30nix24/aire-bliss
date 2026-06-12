import { BrowserRouter, createBrowserRouter } from "react-router";
import Home from "./features/home/Home";
import Login from "./features/auth/Login";
import SignUp from "./features/auth/SignUp";
import Shop from "./features/shop/Shop";
import Dashboard from "./features/admin/pages/Dashboard";
import Product from "./features/admin/pages/Product";
import Profile from "./features/users/pages/Profile";
import Protect from "./components/Protect";
import EmailVerifier from "./features/auth/EmailVerifier";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/auth/login',
        element: <Login />
    },
    {
        path: '/auth/signup',
        element: <SignUp />
    },
    {
        path: '/auth/verify-email',
        element: <EmailVerifier />
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
    },
    {
        path: '/user/profile/',
        // element: <Protect><Profile /></Protect>
        element: <Profile />
    }
])