import { useEffect, useState } from 'react';
import axios from 'axios';

function useSpecificProduct({ accessToken, productType, category }) {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const params = {
                    productType,
                    category,
                };

                const productData = await axios.get("http://localhost:8080/shop/products", {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                    params,
                    withCredentials: true,
                });

                const fetchedProducts = productData.data.products;
                setProducts(fetchedProducts);
                console.log(pro, "DEFFFHHHHHH");

            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        };

        fetchData();
    }, [accessToken, productType, category]);

    return products; // Return the fetched products
}

export default useSpecificProduct;
