import { createContext } from "react";
import { AuthContext } from "../../auth/services/auth.context";
import { useState } from "react";

export const OrderContext = createContext()

export const OrderProvider = ({ children }) => {

    const [orders, setOrders] = useState([]); 
    const [startOrResumeOrder, setStartOrResumeOrder] = useState(null);
    const [orderLoading, setOrderLoading] = useState(true);


    return (
        <OrderContext.Provider value={{orders, startOrResumeOrder, orderLoading, setOrders, setStartOrResumeOrder, setOrderLoading}}>
            { children }
        </OrderContext.Provider>
    )
}