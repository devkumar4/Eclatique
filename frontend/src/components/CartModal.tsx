import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Success from "../assets/svg/success.svg";

const CartModal: React.FC<ModalProps> = ({ props: { ref } }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsVisible(false);
        }, 5 * 1000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div
            className="fixed top-0 left-1/2 transform"
            style={{
                transition: "transform 0.5s ease-in-out",
                transform: `translate(-50%, ${isVisible ? "0" : "-100%"})`,
            }}
            ref={ref}
        >
            <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
                <img src={Success} alt="Success" className="w-20 h-20 mx-auto mb-4" />
                <h5 className="text-2xl font-bold text-gray-900 dark:text-white">Success!</h5>
                <p className="text-gray-700 dark:text-gray-400">
                    Your item has been added to the cart.
                </p>
                <Link
                    to="/cart"
                    className="inline-block mt-4 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    View Cart
                </Link>
            </div>
        </div>
    );
};

export default CartModal;
