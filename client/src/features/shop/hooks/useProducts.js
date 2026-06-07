import { useContext } from "react";
import { ProductContext } from "../services/product.context";
import { getAllProductApi } from "../services/product.api";

export const useProduct = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProduct must be used within an ProductProvider")
    }
    const { product, products, loading, setProduct, setProducts, setLoading} = context
    const handleFetchAllProduct = async () => {
        setLoading(true);
        try {
            const data = await getAllProductApi();
            setProducts(data.products);
        }
        catch (e) {
            console.error("error while fetching products : ", e);
        }
        finally {
            setLoading(false)
        }
    }

    return { product, products, loading, handleFetchAllProduct }
}