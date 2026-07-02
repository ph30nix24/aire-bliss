import { createContext, useEffect, useState } from "react";
import { getCurrentUserApi } from "./auth.api";

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [wishList, setWishList] = useState(0);
    const [cartLength, setCartLength] = useState(0);
    const [addresses, setAddresses] = useState(0);
    const [orders, setOrders] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true)
            try {
                const data = await getCurrentUserApi();
                setUser(data.user);
                setWishList(data.totalWishlistProduct);
                setCartLength(data.totalCartLength);
                setAddresses(data.totalAddresses);
                setOrders(data.totalOrders);
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