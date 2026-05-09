import { useContext } from "react";
import { AuthContext } from "../services/auth.context";
import { loginApi, registerApi } from "../services/auth.api";


export const useAuth = () => {
    const context = useContext(AuthContext)
    if(!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    const { user, setUser, loading, setLoading} = context;

    const handleSignUp = async ({ name, email, password}) => {
        setLoading(true);
        try{
            const data = await registerApi({name, email, password})
            setUser(data.user)
        }
        catch (e) {
            console.log("Error While signup ", e.message)
        }
        finally {
            setLoading(false);
        }
    }
    const handleLogin = async ({ email, password}) => {
        setLoading(true);
        try{
            const data = await loginApi({name, email, password})
            setUser(data.user)
        }
        catch (e) {
            console.log("Error While signup ", e.message)
        }
        finally {
            setLoading(false);
        }
    }

    return { user, loading, handleLogin, handleSignUp }
}