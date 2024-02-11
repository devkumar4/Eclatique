import React, { useState, useEffect } from "react";
import logo from "../assets/Logo.jpeg";
import account from "../assets/svg/account.svg";
import cartIcon from "../assets/svg/cart.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getGeolocationURL } from "../api/apiConfig";
import useFetchUser from "../hooks/useUserData";

function Navbar() {
    const [location, setLocation] = useState(null);
    const [address, setAddress] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userDetail = useSelector((state) => state.user);
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const userName = useFetchUser();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const position = await getCurrentPosition();
                const { latitude, longitude } = position.coords;

                const geolocationURL = getGeolocationURL(latitude, longitude);
                const response = await fetch(geolocationURL);
                const data = await response.json();

                if (data.display_name) {
                    const addressWords = data.display_name
                        .split(",")
                        .slice(0, 2)
                        .join(" ");
                    setAddress(`Delivering to ${addressWords} ...`);
                } else {
                    setAddress(null);
                }
            } catch (error) {
                console.error("Error fetching or processing address:", error);
                setAddress(null);
            }
        };

        const getCurrentPosition = () => {
            return new Promise<Position>((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            });
        };

        fetchData();

        const watchId = navigator.geolocation.watchPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                setLocation({ latitude, longitude });
            },
            (error) => {
                console.error("Error getting location:", error);
                setLocation(null);
            }
        );

        return () => {
            navigator.geolocation.clearWatch(watchId);
        };
    }, [dispatch]);
    return (
        <nav className="bg-black text-white p-4 md:p-7 shadow-md h-20">
            <div className="container mx-auto flex items-center justify-between mt-[-30px]">
                {/* Logo */}
                <div className="flex items-center" onClick={() => navigate("/")}>
                    <img src={logo} alt="Logo" className="w-24 h-20 cursor-pointer" />
                </div>
                <div className="text-sm font-bold hover:border-transparent px-2 py-2 w-48 cursor-pointer">
                    {address && <div>{address}</div>}
                </div>
                <div className="w-[400px]">
                    <form>
                        <label
                            htmlFor="default-search"
                            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                        >
                            Search
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-600"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="search"
                                id="default-search"
                                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 "
                                placeholder="Search for products..."
                                required
                            />
                            <button
                                type="submit"
                                className="text-white absolute end-2.5 bottom-2.5  hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  bg-slate-900"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </div>

                {/* Navigation Links */}
                <ul className="flex space-x-4 items-center">
                    <li className="hover:underline cursor-pointer text-md font-bold">
                        Home
                    </li>
                    <li className="hover:underline cursor-pointer text-md font-bold">
                        About
                    </li>
                    <li className="hover:underline cursor-pointer text-md font-bold">
                        Services
                    </li>
                    <li className="hover:underline cursor-pointer text-md font-bold">
                        Contact
                    </li>
                </ul>

                {/* Cart and Account Icons */}
                <div className="flex items-center space-x-4">
                    {!userDetail.isAuthenticated ? (
                        <button
                            className="bg-yellow-500 hover:bg-yellow-700 text-black rounded-full px-3  py-3 flex items-center space-x-2 font-semibold transition duration-300 ease-in-out focus:outline-none"
                            onClick={() => navigate("/signin")}
                        >
                            <img src={cartIcon} alt="" className="h-5 w-5" />
                        </button>
                    ) : (
                        <button
                            className="bg-yellow-500 hover:bg-yellow-700 text-black rounded-full px-3  py-3 flex items-center space-x-2 font-semibold transition duration-300 ease-in-out focus:outline-none"
                            onClick={() => navigate("/explore/orders/viewcart")}
                        >
                            <img src={cartIcon} alt="" className="h-5 w-5" />
                            {cart.length > 0 ? (
                                <span className="  text-lg font-mono font-bold text-white rounded-full dark:bg-gray-700">
                                    {cart?.length}
                                </span>
                            ) : null}
                        </button>
                    )}

                    {userDetail.isAuthenticated === false ? (
                        <Link to="/signin">
                            <button className="bg-yellow-500 hover:bg-yellow-700 text-black rounded-full px-3 py-3 flex items-center space-x-2 font-semibold transition duration-300 ease-in-out focus:outline-none focus:ring focus:border-blue-300">
                                <img src={account} alt="" className="h-5 w-5" />
                            </button>
                        </Link>
                    ) : (
                        <Link to="/getUser">
                            <button className="bg-yellow-500 hover:bg-yellow-700 text-black px-4 py-2 rounded-md flex items-center space-x-2 font-semibold transition duration-300 ease-in-out focus:outline-none focus:ring focus:border-blue-300">
                                <span>Hello,</span>
                                <span className="capitalize">{userName?.user?.firstName}</span>
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
