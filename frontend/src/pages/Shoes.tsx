import { useEffect, useRef, useState } from "react";

import sports_shoes from "../assets/svg/SPORTS_SHOES.svg";
import formal_shoes from "../assets/svg/FORMAL_SHOES.svg";
import boots_shoes from "../assets/svg/BOOTS.svg";
import sneakers_shoes from "../assets/svg/SNEAKERS.svg";
import slippers from "../assets/svg/SLIPPERS.svg";
import casual_shoes from "../assets/svg/CASUAL.svg";
import { Link } from "react-router-dom";
import Filter from "../components/Filter";
import { FilterButton } from "../components/FilterButton";
import Cookies from "js-cookie";
import RunningShoesList from "../components/ProductsDetailCard";
import { useOutsideClick } from "../hooks/useOutside";
import useSpecificProduct from "../hooks/useSpecificProduct";
import { Loader } from "../components/Loader";
import BackButton from "../components/Backbutton";

const Shoes = () => {
    const [showFilter, setShowFilter] = useState(false);
    const [category, setCategory] = useState(null);
    const [productType, setProductType] = useState("");

    const modalRef = useRef<HTMLDetailsElement>(null);
    const accessToken = Cookies.get("accessToken");

    useOutsideClick(modalRef, () => setShowFilter(false));
    const product = useSpecificProduct({ accessToken, productType, category });



    const filterButttonProps = {
        doAction: () => setShowFilter(true),
    };
    const filterProps = {
        ref: modalRef,
    };


    return (
        <div className="bg-gradient-to-r from-slate-900 to-gray-800 ">
            <aside
                id="default-sidebar"
                className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 "
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-slate-900">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link
                                to="#"
                                className="flex items-center p-2  rounded-lg  hover:bg-slate-700 group"
                                onClick={() => setProductType("footwear")}
                            >
                                <span className="ms-3 font-mono font-bold text-2xl text-white">
                                    Footwears
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-slate-700 dark:hover:bg-gray-700 group"
                                onClick={() => setCategory("Running")}
                            >
                                <img src={sports_shoes} className="h-10 w-10 " />
                                <span className="flex-1 ms-3 whitespace-nowrap text-gray-300">
                                    Sports Shoes
                                </span>
                                <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                                    New
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-slate-700  dark:hover:bg-gray-700 group"
                                onClick={() => setCategory("Casual")}
                            >
                                <img src={casual_shoes} className="h-10 w-10 " />
                                <span className="flex-1 ms-3 whitespace-nowrap text-gray-300">
                                    Casual Shoes
                                </span>
                                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                                    3
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-slate-700  dark:hover:bg-gray-700 group"
                            >
                                <img src={slippers} className="h-10 w-10 " />
                                <span className="flex-1 ms-3 whitespace-nowrap text-gray-300">
                                    Slippers
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-slate-700  dark:hover:bg-gray-700 group"
                                onClick={() => setCategory("Formal")}
                            >
                                <img src={formal_shoes} className="h-10 w-10 " />
                                <span className="flex-1 ms-3 whitespace-nowrap text-gray-300">
                                    Formal Shoes
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-slate-700  dark:hover:bg-gray-700 group"
                                onClick={() => setCategory("Streetwear")}
                            >
                                <img src={sneakers_shoes} className="h-10 w-10 " />
                                <span className="flex-1 ms-3 whitespace-nowrap text-gray-300">
                                    Sneakers
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-slate-700  dark:hover:bg-gray-700 group"
                            >
                                <img src={boots_shoes} className="h-10 w-10 " />
                                <span className="flex-1 ms-3 whitespace-nowrap text-gray-300">
                                    Boots
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
            {showFilter && (
                <div className="fixed top-0 right-0 left-0 z-50 flex justify-end">
                    <Filter props={filterProps} />
                </div>
            )}



            <div className="p-4 sm:ml-64 overflow-y-auto h-screen flex-wrap ">
                <div className="flex justify-between mt-[-10px]">
                    <BackButton iconColor={"white"} fillColor={"white"} textColor="white" />
                    <FilterButton props={filterButttonProps} />
                </div>
                <div className="h-screen w-full grid grid-cols-1">
                    <div className="gap-3">
                        {product ? (
                            <RunningShoesList products={product} />
                        ) : (
                            <div className="justify-center flex h-screen items-center">
                                <Loader loaderHeight={10} loaderWidth={10} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shoes;
