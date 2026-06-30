import axios from "axios";

const API = import.meta.env.VITE_API_URI;

const CART_API = `${API}aire-bliss/user/cart`;


export const getCart = async () => {
    try {
        const res = await axios.get(`${CART_API}/`, {
            withCredentials: true
        })
        console.log(res.data.message);
        return res.data
    } catch (e) {
        console.error(
            "Error While Fetching Cart:",
            e.response?.data?.message || e.message
        );
    }
}


export const updateCartItemQuantityApi = async (productID) => {
    try {
        const res = await axios.patch(`${API}/${productID}`, {
            withCredentials: true
        })
        console.log(res.data.message)
        return res.data
    } catch (e) {
        console.error(
            "Error While updating Cart Item:",
            e.response?.data?.message || e.message
        );
    }
}


export const removeCartItemApi = async (productID) => {
    try {
        const res = await axios.delete(`${CART_API}/${productID}`, {
            withCredentials: true
        })
        console.log(res.data.message);
        return res.data;
        
    } catch (e) {
        console.error(
            "Error While deleting cart item:",
            e.response?.data?.message || e.message
        );
    }
}
