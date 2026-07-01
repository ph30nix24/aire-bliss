import { createContext, useState } from "react";


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);
    const [wishListLoading, setWishListLoading] = useState(true);
    const [cartLoading, setCartLoading] = useState(true);
    const [addressLoading, setAddressLoading] = useState(true);
    const [cart, setCart] = useState(
        {
            user: 'walncewnaln qlmalmclkema',
            products: [
                {
                    product: {
                        id: 1,
                        name: 'gucci flora',
                        tagline: 'Elegant blossoms in golden sunlight',
                        price: 399,
                        reviews: 90,
                        rating: 4,
                        img: './best-sellers/gucci_flora.webp',
                        desc: ""
                    },
                    quantity: 1
                },
            ],
            totalItems: 1,
            totalPrice: 399,
            totalDiscount: 50,
        }
    );
    const [addresses, setAddresses] = useState([]);
    const [defaultAddress, setDefaultAddress] = useState(null);


    return (
        <UserContext.Provider value={{ wishlist, wishListLoading, cart, cartLoading, addresses, addressLoading, defaultAddress, setWishlist, setWishListLoading, setCart, setCartLoading, setAddresses, setAddressLoading, setDefaultAddress }}>
            {children}
        </UserContext.Provider>
    )
}



