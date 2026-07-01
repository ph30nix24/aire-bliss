import { useContext } from "react";
import { ProductContext } from "../services/product.context";
import { getProductByIdApi } from "../services/product.api";

export const useProduct = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProduct must be used within an ProductProvider")
    }
    const { product, products, loading, setProduct, setProducts, setLoading} = context


    const handleSetProduct =  async (productId)  => {
        try{
            const data = await getProductByIdApi(productId)
            setProduct(data.product)

        } catch (error) {
            console.error(error.message)
        }
    }

    return { product, products, loading, setProducts, handleSetProduct }
}