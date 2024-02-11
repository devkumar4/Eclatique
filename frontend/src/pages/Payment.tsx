import CheckoutForm from '../components/PaymentForm';
import useFetchUser from '../hooks/useUserData';

function Payment() {
    const userDetails = useFetchUser();
    const userAddress = userDetails?.user?.shippingAddress;
    const { street, city, state, zip } = userAddress || {}; // Destructure with default empty object
    const shippingAddress = { street, city, state, zip };
    const formData = { ...userDetails, shippingAddress };

    return (
        <div>
            <CheckoutForm formData={formData} />
        </div>
    );
}

export default Payment;
