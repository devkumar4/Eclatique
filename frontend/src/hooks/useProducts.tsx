// hooks/useProducts.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL_1 } from '../api/apiConfig';

const useProducts = () => {
    const [shoe, setShoe] = useState(null);
    const [shirt, setShirt] = useState(null);
    const [watch, setWatch] = useState(null);
    const [jacket, setJackets] = useState(null);
    const [perfumes, setPefumes] = useState(null);

    useEffect(() => {
        axios.get(`${API_URL_1}`)
            .then((response) => {
                const products = response.data;
                const shoeProduct = products.find(
                    (product) => product.product === 'footwear'
                );
                const shirtProduct = products.find(
                    (product) => product.category === 'Apparel'
                );
                const jacketProduct = products.find(
                    (product) => product.category === 'Apparel'
                );
                const watchProduct = products.find(
                    (product) => product.category === 'Accessories'
                );
                const perfumeProduct = products.find(
                    (product) => product.category === 'Fragrance'
                );

                if (shoeProduct) {
                    shoeProduct.discount = '10% off';
                    shoeProduct.exploreLink = `/explore/shoes/${shoeProduct.product.toLowerCase()}`;
                }

                if (shirtProduct) {
                    shirtProduct.discount = '20% off';
                    shirtProduct.exploreLink = '/explore/shirts';
                }

                if (watchProduct) {
                    watchProduct.discount = '15% off';
                    watchProduct.exploreLink = '/explore/watches';
                }
                if (jacketProduct) {
                    jacketProduct.discount = '15% off';
                    jacketProduct.exploreLink = '/explore/watches';
                }
                if (perfumeProduct) {
                    perfumeProduct.discount = '15% off';
                    perfumeProduct.exploreLink = '/explore/watches';
                }

                setShoe(shoeProduct);
                setShirt(shirtProduct);
                setWatch(watchProduct);
                setJackets(jacketProduct);
                setPefumes(perfumeProduct);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return { shoe, shirt, watch, jacket, perfumes };
};

export default useProducts;
