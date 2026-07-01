import { useContext } from "react";
import { ProductContext } from "../../shop/services/product.context";
import { AdminContext } from "../services/admin.context";
import { addProductApi } from "../services/admin.api";

export const useAdmin = () => {
    const productContext = useContext(ProductContext);
    const adminContext = useContext(AdminContext);
    if (!productContext) {
        throw new Error("useAdmin must be used within a ProductProvider");
    }
    if (!adminContext) {
        throw new Error("useAdmin must be used within an AdminProvider");
    }

    const { setProducts } = productContext;
    const { adminLoading, setAdminLoading } = adminContext;

    const handleAddProduct = async (productData) => {
        setAdminLoading(true);
        try {
            const data = await addProductApi(productData);
            setProducts(data.products);
            return {
                success: data.success,
                message: data.message
            }
        } catch (error) {
            console.error('Error during adding product:', error);
        }
        finally {
            setAdminLoading(false);
        }
    };




    return {adminLoading, handleAddProduct}
}

