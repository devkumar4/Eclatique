import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function ProductDetails(props) {
    const { product, quantity, setQuantity, handleAddToCart } = props;
    const [selectedVariant, setSelectedVariant] = useState('');
    const navigate = useNavigate();

    if (!product) {
        return null;
    }

    const handleVariantChange = (e) => {
        setSelectedVariant(e.target.value);
        console.log("Selected Variant:", e.target.value);
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4 text-center text-gray-900">{product.name}</h2>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <p className="text-gray-800 font-semibold text-lg mb-2">
                        Price: <span className="text-yellow-600">${product.price.toFixed(2)}</span>
                    </p>
                    <p className={`text-gray-700 mb-2 ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                    </p>
                </div>
                {product.variants && (
                    <div>
                        <label htmlFor="variants" className="text-gray-700 block mb-2">
                            Select Variant:
                        </label>
                        <select
                            id="variants"
                            name="variants"
                            value={selectedVariant}
                            onChange={handleVariantChange}
                            className="w-full h-10 border border-gray-300 rounded-md px-2 focus:outline-none"
                        >
                            <option value="" disabled hidden>Select Variant</option>
                            {product.variants.map((variant, index) => (
                                <option key={index} value={variant.name}>
                                    {variant.name}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
            </div>
            <div className="flex items-center mb-6">
                <label htmlFor="quantity" className="text-gray-700 mr-2">
                    Quantity:
                </label>
                <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="w-16 h-10 border border-gray-300 rounded-md px-2 focus:outline-none"
                />
            </div>
            <div className="flex justify-center">
                <button
                    onClick={handleAddToCart}
                    className={`bg-yellow-500 text-white py-2 px-8 rounded-md hover:bg-yellow-600 transition mr-4 focus:outline-none ${product.stock <= 0 && 'opacity-50 cursor-not-allowed'}`}
                    disabled={product.stock <= 0}
                >
                    {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                </button>
                <button
                    onClick={() => navigate("/explore/orders/vieworders")}
                    className={`bg-yellow-500 text-white py-2 px-8 rounded-md hover:bg-yellow-600 transition focus:outline-none ${product.stock <= 0 && 'opacity-50 cursor-not-allowed'}`}
                    disabled={product.stock <= 0}
                >
                    {product.stock > 0 ? 'Order Now' : 'Out of Stock'}
                </button>
            </div>
            <p className="text-gray-600 mt-4 text-center">Don't miss out! Grab your favorite {product.name} now!</p>
        </div>
    );
}

export default ProductDetails;
