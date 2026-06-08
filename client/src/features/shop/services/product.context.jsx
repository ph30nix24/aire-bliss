import { Children, createContext, useEffect, useState } from "react";
import { getAllProductApi } from "./product.api";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [product, setProduct ] = useState(null);

    useEffect(() => {
        const fetchAllProduct = async () => {
            setLoading(true);
            try {
                const data = await getAllProductApi();
                console.log(data.products)
                setProducts(data.products);
                setLoading(false)
            } catch (e) {
                console.log("Error while fetching Products: ", e.message)
            }
            finally {
                setLoading(false)
            }
        }
        fetchAllProduct();
    }, [])

    return (
        <ProductContext.Provider value={{ product, products, setProduct, setProducts, loading, setLoading }}>
            {children}
        </ProductContext.Provider>
    )
}