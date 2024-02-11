import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import Navbar from "../components/Navbar";

import "react-image-gallery/styles/css/image-gallery.css";

import CartModal from "../components/CartModal";

import { Loader } from "../components/Loader";
import { useProductData } from "../hooks/useProduct";
import { useOutsideClick } from "../hooks/useOutside";
import { useAddToCart } from "../hooks/useCartManagement";
import ProductDetails from "../components/ProductDetails";
import ProductGallery from "../components/ProductGallery";
import BackButton from "../components/Backbutton";

const ProductView = () => {
    const { productId } = useParams();
    const accessToken = Cookies.get("accessToken");
    const [quantity, setQuantity] = useState(1);

    const [cartModal, setCartModal] = useState(false);

    const modalRef = useRef<HTMLDetailsElement>(null);

    const { product, loading, error } = useProductData(productId, accessToken);

    const handleOutsideClick = () => {
        setCartModal(false);
    };

    useOutsideClick(modalRef, handleOutsideClick);
    const handleAddToCart = useAddToCart(
        productId,
        quantity,
        accessToken,
        setCartModal
    );
    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    if (loading) {
        return (
            <div className="justify-center flex h-screen items-center">
                <Loader loaderHeight={10} loaderWidth={10} />
            </div>
        );
    }

    if (error) {
        return <p>{error}</p>;
    }

    const cartModalProps = {
        ref: modalRef,
    };

    return (
        <div className="w-full bg-white h-screen">
            <Navbar />
            <BackButton />
            <div className="max-w-7xl mx-auto mt-8 p-6 bg-white rounded shadow-lg">
                {product && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ProductGallery images={product.images} />
                        {cartModal && <CartModal props={cartModalProps} />}
                        <ProductDetails
                            product={product}
                            quantity={quantity}
                            handleAddToCart={handleAddToCart}
                            setQuantity={setQuantity}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductView;
