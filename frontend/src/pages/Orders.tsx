import { useState, useEffect } from "react";
import AddressForm from "../components/AddressForm";
import { useOrder } from "../hooks/useAddress";
import useFetchUser from "../hooks/useUserData";
import { Loader } from "../components/Loader";

function Orders() {
    const user = useFetchUser();
    const predefinedAddress = user?.user?.shippingAddress;

    const [showPage, setShowPage] = useState(false);
    const [error, setError] = useState(null);

    const createOrder = async (formData, setError, e) => {
        e.preventDefault();
        try {
            let orderResponse;
            if (predefinedAddress) {
                console.log("Using predefined address:", predefinedAddress);
                orderResponse = await useOrder(predefinedAddress, setError);
            } else {
                const { street, city, state, zip } = formData;
                const shippingAddress = { street, city, state, zip };
                const orderData = { ...formData, shippingAddress };
                await useOrder(orderData, setError);
            }
            console.log("Order response:", orderResponse);
        } catch (error) {
            console.error("Error creating order:", error);
            setError(error.message);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPage(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="container mx-auto mt-8 overflow-y-auto h-screen">
            <div className="overflow-y-auto h-screen">
                {showPage ? (
                    !predefinedAddress ? (
                        <AddressForm
                            heading={"Address Please !"}
                            buttonText={"Add"}
                            handleSubmit={createOrder}
                        />
                    ) : (
                        <div>Choose Payment Method!</div>
                    )
                ) : (
                    <div className="justify-center flex h-screen items-center">
                        <Loader loaderHeight={10} loaderWidth={10} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Orders;
