import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get("http://localhost:8080/order/ordersHistory", {
                    withCredentials: true
                });
                setOrders(response.data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchOrders();
    }, []);

    const handleRemoveOrder = async (orderId) => {
        try {
            await axios.delete(`http://localhost:8080/order/removeOrder/${orderId}`, {
                withCredentials: true
            });
            setOrders(prevOrders => prevOrders.filter(order => order._id !== orderId));
        } catch (error) {
            console.error("Error removing order:", error);
        }
    };

    return (
        <div className="container mx-auto py-8">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-8 px-4 rounded-lg mb-8 relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4">Your Order History</h1>
                    <p className="text-lg mb-4">Explore your past orders and continue your shopping journey.</p>
                    <button className="bg-white text-indigo-600 font-semibold py-2 px-6 rounded-full hover:bg-indigo-100 transition duration-300 ease-in-out" onClick={() => navigate("/")}>
                        Go to Dashboard
                    </button>
                    <img src="/shopping.svg" className="absolute right-0 bottom-0 -mr-12 -mb-12" alt="Shopping Illustration" />
                </div>
            </div>
            {error && <div className="text-red-500 text-center">Error: {error}</div>}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {orders.map(order => (
                    <div key={order._id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="p-6">
                            <h2 className="text-xl font-bold mb-4">Order ID: {order._id}</h2>
                            <p className="mb-2">Total Price: ${order.totalPrice.toFixed(2)}</p>
                            <p className="mb-2">Status: {order.status}</p>
                            <p className="mb-4">Shipping Address: {order?.userId?.shippingAddress?.street}, {order?.userId?.shippingAddress?.city}, {order?.userId?.shippingAddress?.state}, {order?.userId?.shippingAddress?.zip}</p>
                            <ul className="grid grid-cols-1 gap-4">
                                {order.products.map(product => (
                                    <li key={product.productId} className="flex items-center space-x-4">
                                        <img className="w-16 h-16 object-cover rounded" src={product.productId.images[0]} alt={product.productId.name} />
                                        <p className="font-semibold">{product.productId.name}</p>
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={() => handleRemoveOrder(order._id)}
                                className="mt-4 w-full bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 transition duration-300 ease-in-out"
                            >
                                Remove Order
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderHistory;
