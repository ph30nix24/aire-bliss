import axios from "axios"

const API = import.meta.env.VITE_API_URI;

export const getAllProductApi = async () => {
    try {
        const response = await axios.get(`${API}aire-bliss/products/`, {
            withCredentials: true
        })
       
        return response.data
    }
    catch(error) {
        console.error(error.message)
    }
}

