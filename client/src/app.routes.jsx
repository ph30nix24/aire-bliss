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
import Cart from "./features/users/pages/Cart";
import UserProfile from "./features/users/pages/UserProfile";
import Wishlist from "./features/users/pages/Wishlist";
import Address from "./features/users/pages/Address";
import OrderAddress from "./features/order/pages/OrderAddress";
import OrderReview from "./features/order/pages/OrderReview";
import OrderPayment from "./features/order/pages/OrderPayment";
import ProductPage from "./features/shop/components/ProductPage"

//layouts
import MainLayout from "./Layouts/MainLayout";
import AuthLayout from "./Layouts/AuthLayout";
import UserLayout from "./Layouts/UserLayout";
import CheckoutLayout from "./Layouts/CheckoutLayout";
import AdminLayout from "./Layouts/AdminLayout";
import { AdminProvider } from "./features/admin/services/admin.context";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'shop',
                element: <Shop />
            },
            {
                path: "products/:id",
                element: <ProductPage />,
            },
        ]
    },

    //auth routes
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "signup",
                element: <SignUp />,
            },
            {
                path: "verify-email",
                element: <EmailVerifier />,
            },
        ]
    },


    //user routes
    {
        path: "/user",
        element: <UserLayout />,
        children: [
            {
                path: "profile",
                element: <UserProfile />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
            {
                path: "wishlist",
                element: <Wishlist />,
            },
            {
                path: "addresses",
                element: <Address />,
            },
        ],
    },

    // Checkout
    {
        path: "/checkout",
        element: <CheckoutLayout />,    
        children: [
            {
                path: "address",
                element: <OrderAddress />,
            },
            {
                path: "review",
                element: <OrderReview />,
            },
            {
                path: "payment",
                element: <OrderPayment />,
            },
        ],
    },
    {
        path: "/admin",
        element: (
            <AdminProvider>
                <AdminLayout />
            </AdminProvider>
        ),
        children: [
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "product",
                element: <Product />,
            },
        ],
    },

    {
        path: "*",
        element: <h1>404 Page Not Found</h1>,
    },

])