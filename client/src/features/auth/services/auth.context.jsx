import { createContext, useEffect, useState } from "react";
import { getCurrentUserApi } from "./auth.api";

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true)
            try {
                const data = await getCurrentUserApi();
                console.log(data)
                setUser(data.user);
            } catch(e) {
                console.error("Error while fetching error in context : ", e.response?.data?.message || e.message)
            }
            finally{
                setLoading(false)
            }
        }
        fetchUser()
    }, []);
    return (
        <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
            { children }
        </AuthContext.Provider>
    )
}