import { createContext, useEffect, useState } from "react";
import { getCurrentUserApi } from "./auth.api";

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [wishList, setWishList] = useState(null);
    const [cartLength, setCartLength] = useState(0);
    const [addresses, setAddresses] = useState([]);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true)
            try {
                const data = await getCurrentUserApi();
                console.log(data)
                setUser(data.user);
                setWishList(data.wishlist);
                setCartLength(data.cart);
                setAddresses(data.addresses);
                setOrders(data.orders)
            } catch(e) {
                console.error("Error while fetching error in context : ", e.response?.data?.message || e.message)
            }
            finally{
                setLoading(false)
            }
        }
        fetchUser()
    }, []);
    return (
        <AuthContext.Provider value={{ user, setUser, loading, setLoading, wishList, setWishList, cartLength, setCartLength, addresses, setAddresses, orders, setOrders }}>
            { children }
        </AuthContext.Provider>
    )
}