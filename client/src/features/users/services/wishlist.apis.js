import axios from "axios";
import Product from "../../../../../backend/src/models/product.model";

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