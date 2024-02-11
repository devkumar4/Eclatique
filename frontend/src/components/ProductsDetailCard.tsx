import React from "react";
import { useNavigate } from "react-router-dom";

interface Product {
    _id: any;
    name: string;
    price: string;
    description: string;
    images: string[];
    doAction: () => void;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const navigate = useNavigate();

    return (
        <div className="flex-none w-1/2 max-w-md border border-gray-800 p-4 rounded-md shadow-lg border-s-black  m-2 bg-gray-900 text-white relative overflow-hidden transition-transform transform hover:scale-105">
            <div className="absolute inset-0 bg-white z-0"></div>
            <div className="absolute top-0 left-0 w-1/4 h-full bg-white z-10"></div>
            <div className="absolute top-0 right-0 w-1/4 h-full bg-white z-10"></div>
            <div className="relative z-20 flex flex-col justify-between h-full">
                <div className="mb-4">
                    <div className="relative aspect-w-16 aspect-h-9">
                        <img
                            src={product.images[0]}
                            alt={`Product: ${product.name}`}
                            className="object-cover w-full h-full rounded-md"
                        />
                    </div>
                </div>

                <div className=" items-center">
                    <div>
                        <h2 className="text-lg font-semibold mb-2 text-black font-mono mt-200 ">{product.name}</h2>
                        <p className="text-gray-400 mb-4">{product.description}</p>
                    </div>
                    <span className="text-gray-400">${product.price}</span>
                    <button
                        className=" text-black flex rounded hover:text-slate-600 transition-colors"
                        onClick={() => navigate(`/explore/shoe/${product._id}`)}
                    >
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

const RunningShoesList: React.FC<{ products: Product[] }> = ({ products }) => {
    if (!products || products.length === 0 || !products[0].name) {
        return <div>Error: Product data is missing or invalid.</div>;
    }

    return (
        <div className="flex flex-wrap justify-center p-2 gap-4 ">
            {products.map((product) => (
                <ProductCard key={product._id} product={product} />
            ))}
        </div>
    );
};

export default RunningShoesList;
