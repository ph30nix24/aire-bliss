import { createContext, useState } from "react";


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([])
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);
    const [addresses, setAddresses] = useState([]);
    const [defaultAddress, setDefaultAddress] = useState(null);
    

    return (
        <UserContext.Provider value={{ wishlist, loading, cart, addresses, defaultAddress,setWishlist, setLoading, setCart, setAddresses, setDefaultAddress}}>
            { children }
        </UserContext.Provider>
    )
}