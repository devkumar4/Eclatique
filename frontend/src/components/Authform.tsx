// AuthForm.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AuthForm = ({ handleSubmit, buttonText, linkTo, linkText, showEmailField, showPhoneNumberField, heading, indicationText }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        email: "",
        phoneNumber: "",
        password: "",
    });
    const [error, setError] = useState("");

    const handleClick = (e) => {
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
                                <label
                                    className="block mb-2 text-sm font-medium text-black"
                                >
                                    First name*
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Sam"
                                    onChange={handleClick}
                                />
                            </div>

                            {showEmailField && <div>
                                <label
                                    className="block mb-2 text-sm font-medium text-black"
                                >
                                    Email (optional)
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="name@company.com"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChange={handleClick}
                                />
                            </div>}


                            {
                                showPhoneNumberField && <div>
                                    <label
                                        className="block mb-2 text-sm font-medium text-black"
                                    >
                                        Mobile number*
                                    </label>
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        id="phoneNumber"
                                        placeholder="Mobile number"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        onChange={handleClick}
                                    />
                                </div>}
                            <div>
                                <label
                                    className="block mb-2 text-sm font-medium text-black"
                                >
                                    Password*
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="At least 6 characters"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChange={handleClick}
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
                            <p className="text-sm font-bold text-black text-center">
                                {indicationText}{" "}
                                <Link
                                    to={linkTo}
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500 underline"
                                >
                                    {linkText}
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuthForm;
