import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';

const CheckoutForm = ({ userAddress, totalPrice }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        try {
            const response = await axios.post("http://localhost:8080/order/orders", {
                shippingAddress: userAddress
            }, {
                withCredentials: true
            });

            const { session_id } = response.data;
            console.log(response.data, "DEVV");


            const result = await stripe.redirectToCheckout({
                sessionId: session_id
            });

            if (result.error) {
                setError(result.error.message);
            } else {
                await localStorage.removeItem('cart');
            }

        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Payment Information</h2>
            <button onClick={handleSubmit}>Proceeded to payment</button>
        </div>
    );
};

export default CheckoutForm;
