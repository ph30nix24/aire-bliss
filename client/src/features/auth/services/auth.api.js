import axios from "axios";
const API = import.meta.env.VITE_API_URI;

const Auth_API = `${API}aire-bliss/auth`;


export const registerApi = async ({ name, email, password }) => {
    try {
        const res = await axios.post(`${Auth_API}/signup`, { name, email, password }, {
            withCredentials: true
        });
        console.log(res.data.message);
        return res.data;
    }
    catch (error) {
        console.error('Error during registration:', error);
        throw error
    }
}
export const loginApi = async ({ email, password }) => {
    try {
        const res = await axios.post(`${Auth_API}/login`, { email, password }, {
            withCredentials: true
        });
        console.log(res.data.message);
        return res.data;
    }
    catch (error) {
        console.error('Error during Login:', error);
        throw error
    }
}
