import { Children, createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [product, setProduct ] = useState(null);


    return (
        <ProductContext.Provider value={{ product, products, setProduct, setProducts, loading, setLoading }}>
            {children}
        </ProductContext.Provider>
    )
}