import axios from "axios";

const API = import.meta.env.VITE_API_URI;

const WISHLIST_API = `${API}aire-bliss/user/wishlist`;

export const getWishListApi = async () => {
    try {
        const res = await axios.get(`${WISHLIST_API}/`, {
            withCredentials: true
        })
        console.log(res.data.message);
        return res.data
    }
    catch (error) {
        console.error(
            "Error While fetching Wishlist:",
            error.response?.data?.message || error.message
        );
    }
}

export const addToWishlistApi = async (ProductId) => {
    try {
        const res = await axios.post(`${WISHLIST_API}/${ProductId}`, {
            withCredentials: true
        }) 
        console.log(res.data.message);
        return res.data
    } catch (error) {
        console.error(
            "Error While adding item in Wishlist:",
            error.response?.data?.message || error.message
        );
    }
}

export const removeFromWishlistApi = async (productId) => {
    try {
        const res = await axios.delete(`${WISHLIST_API}/${productId}`, {
            withCredentials: true
        })
        console.log(res.data.message);
        return res.data;
    } catch (error) {
        console.error(
            "Error While deleting item in Wishlist:",
            error.response?.data?.message || error.message
        );
    }
}