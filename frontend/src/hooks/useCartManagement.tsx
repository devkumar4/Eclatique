import { useDispatch } from "react-redux";
import { addToCart } from "../red/slices/Products";
import { addToCartApi } from "../api/api";


export const useAddToCart = (productId, quantity, accessToken, setCartModal) => {
    const dispatch = useDispatch();

    const handleAddToCart = async () => {
        try {
            const response = await addToCartApi(productId, quantity, accessToken);
            dispatch(addToCart([response]))
            setCartModal(true);
        } catch (error) {
            console.error("Error adding product to cart:", error);
        }
    };

    return handleAddToCart;
};



