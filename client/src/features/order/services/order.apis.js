import axios from "axios";

const API = import.meta.env.VITE_API_URI;

const ORDER_API = `${API}aire-bliss/orders`;



export const getOrdersApi = async () => {
    try {
        const res = await axios.get(`${ORDER_API}/`, {
            withCredentials: true
        })
        console.log(res.data.message);
        return res.data

    } catch (error) {
        console.error(
            "Error:",
            error.response?.data?.message || error.message
        );
    }
}
export const draftOrderApi = async ({ items, source }) => {
    try {
        const res = await axios.post(`${ORDER_API}/draft-order`, { items, source }, {
            withCredentials: true
        })
        console.log(res.data.message);
        return res.data

    } catch (error) {
        console.error(
            "Error:",
            error.response?.data?.message || error.message
        );
    }
}


export const setShippingAddressApi = async ({id, addressId}) =>{
    try {
        const res = await axios.put(`${ORDER_API}/${id}`, {
            addressId
        }, { withCredentials: true })

        console.log(res.data.message);
        return res.data

    } catch (error) {
        console.error(
            "Error:",
            error.response?.data?.message || error.message
        );
    }
}