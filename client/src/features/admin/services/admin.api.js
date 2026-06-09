import axios from "axios";
const API = import.meta.env.VITE_API_URI;

const Admin_API = `${API}aire-bliss/admin`;

export const addProductApi = async (productData) => {
    try {
        const res = await axios.post(`${Admin_API}/product/create-product`, productData, {
            withCredentials: true
        });
        return res.data;
    }
    catch (error) {
        console.error('Error during adding product:', error);
        throw error
    }
}

