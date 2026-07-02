import { useContext } from "react"
import { UserContext } from "../services/user.context"
import { addToWishlistApi, getWishListApi, removeFromWishlistApi } from "../services/wishlist.apis";
import { addItemToCart, getCart, removeCartItemApi, updateCartItemQuantityApi } from "../services/cart.apis";
import { addAddressApi, deleteAddressApi, getDefaultAddressApi, getUserAddresses, setDefaultAddressApi, updateAddressApi } from "../services/address.apis";

export const useUserData = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUserData must be used within UserContext")
    }
    const { wishlist, wishListLoading, cart, cartLoading, addresses, addressLoading, defaultAddress, setWishlist, setWishListLoading, setCart, setCartLoading, setAddresses, setAddressLoading, setDefaultAddress} = context;

    const handleGetWishlist = async () => {
        setWishListLoading(true);
        try {
            const data = await getWishListApi();
            setWishlist(data.products);
        }
        catch(e) {
            console.error("Error while assigning value to wishlist: ", e.message)
        }
        finally {
            setWishListLoading(false)
        }
    }

    const handleAddItemInWishlist = async (productId) => {
        setWishListLoading(true);
        try {
            const data = await addToWishlistApi(productId);
            setWishlist(data.products);
        }
        catch(e) {
            console.error("Error while Adding item in wishlist: ", e.message);
        }
        finally {
            setWishListLoading(false)
        }
    }

    const handleRemoveItemWishlist = async (productId) => {
        setWishListLoading(true);
        try {
            const data = await removeFromWishlistApi(productId);
            setWishlist(data.products);
        }
        catch(e) {
            console.error("Error while removing item from wishlist: ", e.message);
        }
        finally {
            setWishListLoading(false);
        }
    }


    const handleGetCart = async () => {
        setCartLoading(true);
        try {
            const data = await getCart();
            setCart(data.cart);
        }
        catch(e) {
            console.error("Error while fetching cart: ", e.message);
        }
        finally {
            setCartLoading(false);
        }
    }

    const handleCartItemQuantity = async (productID) => {
        setCartLoading(true);
        try {
            const data = await updateCartItemQuantityApi(productID);
            setCart(data.cart.products);
        }
        catch(e) {
            console.error("Error while updating items quantity in cart: ", e.message);
        }
        finally {
            setCartLoading(false);
        }
    }

    const handleAddItemCart = async (productID) => {
        setCartLoading(true);
        try {
            const data = await addItemToCart(productID);
            setCart(data.cart);
            console.log(data.cart)
            return {
                success: data.success,
                message: data.message
            }
        }
        catch(e) {
            console.error("Error while adding item in cart: ", e.message);
        }
        finally {
            setCartLoading(false);
        }
    }

    const handleRemoveCartItem = async (productID) => {
        setCartLoading(true);
        try {
            const data = await removeCartItemApi(productID);
            setCart(data.cart);
        }
        catch(e) {
            console.error("Error while removing item from cart: ", e.message);
        }
        finally {
            setCartLoading(false);
        }
    }


    const handleGetAddress = async () => {
        setAddressLoading(true);
        try {
            const data = await getUserAddresses();
            setAddresses(data.addresses);
        }
        catch(e) {
            console.error("Error while fetching addresses: ", e.message);
        }
        finally {
            setAddressLoading(false);
        }
    }

    const handleAddAddress = async ({ name, phoneNo, alternatePhoneNo, addressLine1, addressLine2, landmark, city, state, pincode, addressType }) => {
        setAddressLoading(true);
        try {
            const data = await addAddressApi({ name, phoneNo, alternatePhoneNo, addressLine1, addressLine2, landmark, city, state, pincode, addressType });
            setAddresses(data.addresses);
        }
        catch(e) {
            console.error("Error while adding address: ", e.message);
        }
        finally {
            setAddressLoading(false);
        }
    }


    const handleUpdateAddress = async ({ name, phoneNo, alternatePhoneNo, addressLine1, addressLine2, landmark, city, state, pincode, addressType, id }) => {
        setAddressLoading(true);
        try {
            const data = await updateAddressApi({ name, phoneNo, alternatePhoneNo, addressLine1, addressLine2, landmark, city, state, pincode, addressType, id });
            setAddresses(data.addresses);
        }
        catch(e) {
            console.error("Error while updating address: ", e.message);
        }
        finally {
            setAddressLoading(false);
        }
    }


    const handleDeleteAddress = async (id) => {
        setAddressLoading(true);
        try {
            const data = await deleteAddressApi(id);
            setAddresses(data.addresses);
        }
        catch(e) {
            console.error("Error while deleting address: ", e.message);
        }
        finally {
            setAddressLoading(false);
        }
    }

    const handleGetDefaultAddress = async () => {
        setAddressLoading(true);
        try {
            const data = await getDefaultAddressApi();
            setDefaultAddress(data.address);
        }
        catch(e) {
            console.error("Error while fetching default address: ", e.message);
        }
        finally {
            setAddressLoading(false);
        }
    }


    const handleSetDefaultAddress = async (id) => {
        setAddressLoading(true);
        try {
            const data = await setDefaultAddressApi(id);
            setDefaultAddress(data.address);
        }
        catch(e) {
            console.error("Error while setting default address: ", e.message);
        }
        finally {
            setAddressLoading(false);
        }
    }


    return { wishlist, wishListLoading, cart, cartLoading, addresses, addressLoading, defaultAddress, handleGetWishlist, handleAddItemInWishlist, handleRemoveItemWishlist, handleGetCart, handleCartItemQuantity, handleAddItemCart, handleRemoveCartItem, handleGetAddress, handleAddAddress, handleUpdateAddress, handleDeleteAddress, handleGetDefaultAddress, handleSetDefaultAddress }
}
