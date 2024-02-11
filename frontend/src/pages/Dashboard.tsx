import { useEffect, useState } from "react";
import Carousel from "../components/Carausel";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { useRef } from "react";

import { SignIn } from "../components/SignIn.modal";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { Loader } from "../components/Loader";
import useProducts from "../hooks/useProducts";
import { useOutsideClick } from "../hooks/useOutside";
import useFetchUser from "../hooks/useData";

function Dashboard() {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const accessToken = Cookies.get("accessToken");
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const { shoe, shirt, watch, jacket, perfumes } = useProducts();
    const modalRef = useRef<HTMLDetailsElement>(null);
    useFetchUser();


    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "visible";
        };
    }, []);
    const handleOutsideClick = () => {
        setShowModal(false);
    };
    useOutsideClick(modalRef, handleOutsideClick)

    const signInProps = {
        title: "Want to shop ?",
        description: "Signin for better experience",
        onCloseAction: () => setShowModal(false),
        onSignInAction: () => navigate("/signIn"),
        ref: modalRef
    };

    useEffect(() => {
        if (!accessToken) {
            const timeoutId = setTimeout(() => {
                setShowModal(true);
            }, 20 * 1000);

            return () => {
                clearTimeout(timeoutId);
            };
        }


        return undefined;
    }, [accessToken, dispatch, signInProps]);

    return (
        <div className={`overflow-y-auto h-screen flex flex-col bg-gray-100 `}>
            <Navbar />
            <Carousel />

            <div
                className={`flex-grow m-10 flex flex-wrap justify-center items-center mt-[-300px]`}
            >
                <h1 className="absolute">
                    <div role="status">
                        <Loader loaderHeight={10} loaderWidth={10} />
                        <span className="sr-only">Loading...</span>
                    </div>
                </h1>

                <>
                    {!isAuthenticated && !accessToken && showModal == true ? (
                        <SignIn props={signInProps} />
                    ) : (
                        <h1>HELLO</h1>
                    )}

                    <div className="flex justify-center items-center mb-8 columns-2">
                        {shoe && <ProductCard product={shoe} />}
                        {shirt && <ProductCard product={shirt} />}
                        {watch && <ProductCard product={watch} />}
                    </div>
                    <div className="flex justify-center items-center mb-8">
                        {watch && <ProductCard product={jacket} />}
                        {watch && <ProductCard product={perfumes} />}
                        {watch && <ProductCard product={watch} />}
                    </div>
                </>
            </div>
        </div>
    );
}

export default Dashboard;
