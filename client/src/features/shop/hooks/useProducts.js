import { useContext } from "react";
import { ProductContext } from "../services/product.context";

export const useProduct = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProduct must be used within an ProductProvider")
    }
    const { product, products, loading, setProduct, setProducts, setLoading} = context

    return { product, products, loading, setProduct, setProducts }
}