import { useContext } from "react";
import { orderContext } from "../services/order.context";
import { getOrdersApi } from "../services/order.apis";


export const useOrders = () => {
    const context = useContext(orderContext)
    if (!context) {
        throw new Error("useOrders must be used within an OrderProvider");
    }

    const { orders, startOrResumeOrder, orderLoading, setOrders, setStartOrResumeOrder, setOrderLoading } = context;

    const handleGetAllOrders = async () => {
        setOrderLoading(true);
        try {
            const data = await getOrdersApi();
            setOrders(data.orders);
            return {
                success: data.success,
                message: data.message,
            }
        }
        catch (error) {
            console.log("Error while fetching the orders", error.message)
        }
        finally {
            setOrderLoading(false);
        }
    }

    return { orders, startOrResumeOrder, orderLoading, handleGetAllOrders}
}