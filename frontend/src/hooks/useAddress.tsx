import { handleOrder } from "../api/api";

export const useOrder = async (formData, setError) => {
    try {
        console.log(formData);

        await handleOrder(formData);
        return handleOrder;
    } catch (error: any) {
        setError(error);
    }
};
