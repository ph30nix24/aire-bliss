import axios from "axios";
const API = import.meta.env.VITE_API_URI;

const Auth_API = `${API}aire-bliss/auth`;

const User_API = `${API}aire-bliss/user`

export const registerApi = async ({ name, email, password }) => {
    try {
        const res = await axios.post(`${Auth_API}/signup`, { name, email, password }, {
            withCredentials: true
        });
        console.log(res.data.message);
        return res.data;
    }
    catch (error) {
        console.error(
            "Error:",
            error.response?.data?.message || error.message
        );
    }
}
export const loginApi = async ({ email, password }) => {
    try {
        const res = await axios.post(`${Auth_API}/login`, { email, password }, {
            withCredentials: true
        });
        console.log(res.data.message);
        console.log(res.data);
        return res.data;
    }
    catch (error) {
        console.error(
            "Error:",
            error.response?.data?.message || error.message
        );
    }
}

export const emailVerifierApi = async (otp) => {
    console.log(otp)
    try {
        const res = await axios.put(`${Auth_API}/verify-email`, { code: otp}, {
            withCredentials: true
        });
        console.log(res.data)
        return res.data
    }
    catch (error) {
        console.error(
            "Error:",
            error.response?.data?.message || error.message
        );
    }
}

export const getCurrentUserApi = async () => {
    try {
        const res = await axios.get(`${User_API}/`, {
            withCredentials: true
        })
        console.log(res.data.message);
        return res.data
    }
    catch (error) {
        console.error('Error during getting current user:', error.message);
    }
}
