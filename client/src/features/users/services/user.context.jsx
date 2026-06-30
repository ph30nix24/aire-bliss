import { createContext, useState } from "react";


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);
    const [wishListLoading, setWishListLoading] = useState(true);
    const [cartLoading, setCartLoading] = useState(true);
    const [addressLoading, setAddressLoading] = useState(true);
    const [cart, setCart] = useState([]);
    const [addresses, setAddresses] = useState([]);
    const [defaultAddress, setDefaultAddress] = useState(null);
    

    return (
        <UserContext.Provider value={{ wishlist, wishListLoading, cart, cartLoading, addresses, addressLoading, defaultAddress, setWishlist, setWishListLoading, setCart, setCartLoading, setAddresses, setAddressLoading, setDefaultAddress}}>
            { children }
        </UserContext.Provider>
    )
}