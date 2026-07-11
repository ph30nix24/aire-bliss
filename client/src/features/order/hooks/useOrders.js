import { useContext } from "react";
import { OrderContext } from "../services/order.context";
import { draftOrderApi, getAllOrdersApi, getOrderApi, setShippingAddressApi, setStatusApi } from "../services/order.apis";


export const useOrders = () => {
    const context = useContext(OrderContext)
    if (!context) {
        throw new Error("useOrders must be used within an OrderProvider");
    }

    const { orders, startOrResumeOrder, orderLoading, setOrders, setStartOrResumeOrder, setOrderLoading } = context;

    const handleGetAllOrders = async () => {
        setOrderLoading(true);
        try {
            const data = await getAllOrdersApi();
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
    const handleGetOrder = async ({ id }) => {
        setOrderLoading(true);
        try {
            const data = await getOrderApi({ id })
            setStartOrResumeOrder(data.order);
            return {
                success: data.success,
                message: data.message,
            }
        } catch (error) {
            console.log("Error while fetching the order", error.message)
        }
        finally {
            setOrderLoading(false);
        }
    }

    const handleAddDraftOrder = async ({ items, source }) => {
        setOrderLoading(true);
        try {
            const data = await draftOrderApi({ items, source })
            setStartOrResumeOrder(data.order)
            return {
                id: data.order._id,
                success: data.success,
                message: data.message,
            }
        }
        catch (error) {
            console.log("Error while drafting the orders", error.message)
        }
        finally {
            setOrderLoading(false);
        }
    }


    const handleSetShippingAddress = async ({ id, addressId }) => {
        setOrderLoading(true);
        try {
            const data = await setShippingAddressApi({ id, addressId })
            setStartOrResumeOrder(data.order)
            return {
                success: data.success,
                message: data.message,
            }
        }
        catch (error) {
            console.log("Error while drafting the orders", error.message)
        }
        finally {
            setOrderLoading(false);
        }
    }

    const handleStatusUpdate = async ({ id, status }) => {
        setOrderLoading(true);
        try {
            const data = await setStatusApi({ id, status })
            setStartOrResumeOrder(data.order)
            return {
                success: data.success,
                message: data.message,
            }
        } catch (error) {
            console.log("Error while drafting the orders", error.message)
        }
        finally {
            setOrderLoading(false);
        }
    }

    return { orders, startOrResumeOrder, orderLoading, handleGetAllOrders, handleAddDraftOrder, handleSetShippingAddress, handleGetOrder, handleStatusUpdate }
}