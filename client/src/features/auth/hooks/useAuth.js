import { useContext } from "react";
import { AuthContext } from "../services/auth.context";
import { emailVerifierApi, loginApi, registerApi } from "../services/auth.api";


export const useAuth = () => {
    const context = useContext(AuthContext)
    if(!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    const { user, setUser, loading, setLoading, wishList, setWishList, cartLength, setCartLength, addresses, setAddresses, orders, setOrders} = context;

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
            const data = await loginApi({ email, password })
            setUser(data.user);
            setWishList(data.wishlist);
            setCartLength(data.cartLength);
            setAddresses(data.addresses);
            setOrders(data.orders);
        }
        catch (e) {
            console.log("Error While signup ", e.message)
        }
        finally {
            setLoading(false);
        }
    }
    const handleVerifyEmail = async ( otp ) => {
        console.log(otp)
        setLoading(true);
        try {
            const data = await emailVerifierApi(otp);
            return data
        }
        catch ( error ) {
            console.log("Error while verifying email", error.message)
        }
        finally {
            setLoading(false)
        }
    }

    return { user, loading, handleLogin, handleSignUp, handleVerifyEmail, wishList,  cartLength, addresses, orders }
}