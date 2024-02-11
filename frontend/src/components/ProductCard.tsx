import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Product {
    id: number;
    name: string;
    price: string;
    discount?: string;
    images: string[];
    exploreLink?: string; // New property for explore link
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.images.length) % product.images.length);
    };

    return (
        <div className="shadow-lg text-black p-4 m-4 rounded-lg w-96 bg-white transition-transform duration-300 ease-in-out transform hover:shadow-2xl">
            <h1 className="text-2xl font-bold mb-2 font-mono text-center">{product.name}</h1>
            <p className="text-gray-700 mb-2 text-xl">₹{product.price}</p>

            {product.discount && (
                <p className="text-green-500 font-semibold mb-2">
                    Discount: {product.discount}
                </p>
            )}

            <div className="relative h-60 overflow-hidden">
                <img
                    className="w-full h-full object-cover rounded-t-lg"
                    style={{ aspectRatio: '16/9' }} // Set the aspect ratio to ensure equal heights
                    src={product.images[currentImageIndex]}
                    alt={`Image ${currentImageIndex + 1} for ${product.name}`}
                />

                <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4">
                    <button onClick={prevImage} className="text-white p-2 bg-black/60 focus:outline-none rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button onClick={nextImage} className="text-white p-2 bg-black/60 focus:outline-none rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>

            {product.exploreLink && (
                <Link to={product.exploreLink} className="text-blue-500 block mt-2 text-sm hover:underline">
                    Explore More
                </Link>
            )}
        </div>
    );
};

export default ProductCard;
