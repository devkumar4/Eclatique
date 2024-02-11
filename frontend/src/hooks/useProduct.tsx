
import { useEffect, useState } from "react";
import { fetchProductData } from "../api/api";

export const useProductData = (productId, accessToken) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productData = await fetchProductData(productId, accessToken);
                setProduct(productData);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, [productId, accessToken]);

    return { product, loading, error };
};