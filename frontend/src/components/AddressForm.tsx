import { useState } from "react";
export const AddressForm = ({ handleSubmit, buttonText, heading }) => {
    const [formData, setFormData] = useState({
        street: "",
        city: "",
        state: "",
        zip: "",
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = async (e) => {
        try {
            e.preventDefault();
            await handleSubmit(formData, setError, e);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <section className="">
            <div className="flex flex-col items-center justify-center px-5 py-7 mx-auto md:h-screen lg:py-0">
                <div className="w-full  rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4  ">
                        <h1 className="text-4xl font-sm leading-tight tracking-tight text-black text-center mt-10 ">
                            {heading}
                        </h1>

                        <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-black">
                                    Street*
                                </label>
                                <input
                                    type="text"
                                    name="street"
                                    id="street"
                                    className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Street Address"
                                    value={formData.street}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-black">
                                    City*
                                </label>
                                <input
                                    type="text"
                                    name="city"
                                    id="city"
                                    placeholder="City name"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-black">
                                    State*
                                </label>
                                <input
                                    type="text"
                                    name="state"
                                    id="state"
                                    placeholder="State name"
                                    value={formData.state}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-black">
                                    Zip Code*
                                </label>
                                <input
                                    type="text"
                                    name="zip"
                                    id="zip"
                                    placeholder="Zip Code"
                                    value={formData.zip}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full text-white bg-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                {buttonText}
                            </button>
                            {error && (
                                <p className="text-sm font-bold text-red-500 text-center">
                                    {error}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddressForm;
