import axios from "axios"

const API = import.meta.env.VITE_API_URI;

export const getAllProductApi = async () => {
    try {
        const data = await axios.get(`${API}/products/`, {
            withCredentials: true
        })
        return data
    }
    catch(error) {
        console.error(error.message)
    }
}

