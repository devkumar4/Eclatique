import React from 'react';
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';

function CartCard({ products, handleRemoveCart, setCartProducts }) {
    const navigate = useNavigate();

    const handleRemove = async (productId) => {
        try {
            let existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
            existingCart = existingCart.filter(item => item.productId !== productId);
            localStorage.setItem("cart", JSON.stringify(existingCart));
            console.log("Item removed successfully from local storage");
            setCartProducts(prevProducts => prevProducts.filter(product => product.productId !== productId));
            const accessToken = Cookies.get('accessToken');
            await handleRemoveCart(productId, accessToken);
            console.log("Item removed successfully from cart");
            window.location.reload();
        } catch (error) {
            console.error("Error removing item from cart:", error);
        }
    };

    const calculateTotalPrice = () => {
        return products.reduce((total, product) => total + parseFloat(product.productId.price) * parseInt(product.quantity), 0).toFixed(2);
    };

    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Your Shopping Cart</h2>
            <div className="border-t border-gray-200 py-4">
                {products.map((product) => (
                    <div key={product.productId.id} className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4">
                            <img src={product.productId.images[0]} alt="Product" className="w-24 h-24 rounded-lg shadow-md" />
                            <div>
                                <p className="text-lg font-semibold text-gray-800">{product.productId.name}</p>
                                <p className="text-gray-600">Quantity: {product?.quantity}</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <p className="text-lg text-gray-800 font-semibold">
                                ${(parseFloat(product.productId.price) * parseInt(product.quantity)).toFixed(2)}
                            </p>
                            <button className="text-gray-500 hover:text-red-600 focus:outline" onClick={() => handleRemove(product.productId._id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>

                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="bg-gray-100 px-4 py-2 flex justify-between items-center">
                <p className="text-lg text-gray-700">Total:</p>
                <p className="text-lg text-gray-800 font-semibold">${calculateTotalPrice()}</p>
            </div>
            <div className="flex justify-center mt-8">
                <button className="bg-black hover:bg-white hover:text-black text-white py-3 px-6 rounded-lg focus:outline-none shadow-md font-bold font-mono transform transition-transform duration-300 hover:scale-105" onClick={() => navigate("/explore/orders/payment")}>
                    Checkout Now
                </button>
            </div>
        </div>
    );
}

export default CartCard;
