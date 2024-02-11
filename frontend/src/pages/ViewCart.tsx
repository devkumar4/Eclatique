import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import CartCard from '../components/CartCard';
import Navbar from '../components/Navbar';
import BackButton from '../components/Backbutton';
import { Loader } from '../components/Loader';
import useFetchUser from '../hooks/useUserData';
import { useNavigate } from 'react-router-dom';
import { handleRemoveCart } from '../api/api';


const ViewCart = () => {
    const accessToken = Cookies.get('accessToken');
    const [cartProducts, setCartProducts] = useState([]);
    const UserAddress = useFetchUser();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productData = await axios.get("http://localhost:8080/shop/viewCart", {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                    withCredentials: true,
                });

                const products = productData.data;
                setCartProducts(products);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching cart data:", error);
                setError("Error fetching cart data. Please try again later.");
                setLoading(false);
            }
        };

        fetchData();
    }, [accessToken]);

    const handleEditAddress = () => {
        // Add logic for editing address here
    };

    const handleRemoveAddress = () => {
        // Add logic for removing address here
    };

    return (
        <div className='h-screen bg-gray-100'>
            <Navbar />
            <div className='overflow-y-auto px-4'>
                <BackButton />
                {loading ? (
                    <div className="justify-center flex h-screen items-center">
                        <Loader loaderHeight={10} loaderWidth={10} />
                    </div>
                ) : error ? (
                    <div className="text-red-600">{error}</div>
                ) : (
                    <>
                        <CartCard products={cartProducts} setCartProducts={setCartProducts} handleRemoveCart={handleRemoveCart} />
                        <div className="mt-6 bg-white rounded-lg shadow-md overflow-hidden">
                            <h2 className="text-lg font-semibold text-white bg-black  py-3 px-4 rounded-t-lg">Shipping Address</h2>
                            <div className="p-4">
                                {UserAddress?.user?.shippingAddress ? (
                                    <div className="text-gray-800">
                                        <div className="mb-4">
                                            <p className="text-sm font-semibold">Name:</p>
                                            <p className="text-sm">{UserAddress?.user?.firstName}</p>
                                        </div>
                                        <div className="mb-4">
                                            <p className="text-sm font-semibold">Address:</p>
                                            <p className="text-sm">{UserAddress?.user?.shippingAddress.street}</p>
                                            <p className="text-sm">{UserAddress?.user?.shippingAddress.city}, {UserAddress?.user?.shippingAddress.state} {UserAddress?.user?.shippingAddress.zip}</p>
                                            <p className="text-sm">{UserAddress?.user?.shippingAddress.country}</p>
                                        </div>
                                        <div className="flex justify-end">
                                            <button className="text-sm text-yellow-500 font-mono font-bold  hover:text-yellow-700 focus:outline-none mr-4 transition duration-300 flex" onClick={() => navigate("/explore/orders/addAddress")}>
                                                Edit Address
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mt-[-1px] ml-1">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                </svg>

                                            </button>

                                        </div>
                                    </div>
                                ) : (
                                    <p className="text-gray-600">No shipping address found</p>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default ViewCart;
