import axios from "axios";

const API = import.meta.env.VITE_API_URI;


const ADDRESS_URI = `${API}aire-bliss/user/address`;

export const getUserAddresses = async () => {
    try {
        const res = await axios.get(`${ADDRESS_URI}/`, {
            withCredentials: true
        })
        console.log(res.data.message);
        return res.data

    } catch (error) {
        console.error(
            "Error While fetching Address:",
            error.response?.data?.message || error.message
        );
    }
}

export const addAddressApi = async ({ name, phoneNo, alternatePhoneNo, addressLine1, addressLine2, landmark, city, state, pincode, addressType }) => {
    try {
        const res = await axios.post(`${ADDRESS_URI}/`,{ name, phoneNo, alternatePhoneNo, addressLine1, addressLine2, landmark, city, state, pincode, addressType }, {
            withCredentials: true
        })
        console.log(res.data.message);
        return res.data
    } catch (error) {
        console.error(
            "Error While adding Address:",
            error.response?.data?.message || error.message
        );
    }
}

export const updateAddressApi = async ({ name, phoneNo, alternatePhoneNo, addressLine1, addressLine2, landmark, city, state, pincode, addressType, id}) => {
    try {
        const res = await axios.put(`${ADDRESS_URI}/${id}`, { name, phoneNo, alternatePhoneNo, addressLine1, addressLine2, landmark, city, state, pincode, addressType }, {
            withCredentials: true
        })

        console.log(res.data.message);
        return res.data

    } catch (error) {
        console.error(
            "Error While adding Address:",
            error.response?.data?.message || error.message
        );
    }

}

export const getSingleAddress = async (id) => {
    try {
        const res = await axios.get(`${ADDRESS_URI}/${id}`, {
            withCredentials: true
        })
        console.log(res.data.message);
        return res.data
    } catch (error) {
        console.error(
            "Error While fetching Address:",
            error.response?.data?.message || error.message
        );
    }
}

export const deleteAddressApi = async (id) => {
    try {
        const res = await axios.delete(`${ADDRESS_URI}/${id}`, {
            withCredentials: true
        })
        console.log(res.data.message);
        return res.data
    } catch (error) {
        console.error(
            "Error While deleting Address:",
            error.response?.data?.message || error.message
        );
    }
}


export const setDefaultAddressApi = async (id) => {
    try {
        const res = await axios.patch(`${ADDRESS_URI}/default/${id}`, {
            withCredentials: true
        })
        console.log(res.data.message);
        return res.data
    } catch (error) {
        console.error(
            "Error While setting default Address:",
            error.response?.data?.message || error.message
        );
    }
}

export const getDefaultAddressApi = async () => {
    try {
        const res = await axios.get(`${ADDRESS_URI}/default`, {
            withCredentials: true
        })
        console.log(res.data.message);
        return res.data
    } catch (error) {
        console.error(
            "Error While setting default Address:",
            error.response?.data?.message || error.message
        );
    }
}