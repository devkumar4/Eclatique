

import React from "react";

interface Props {
    title: string;
    description: string;
    onCloseAction: () => void;
    onSignInAction: () => void;
    ref: React.RefObject<HTMLInputElement>;


}

interface SignInProps {
    props: Props;
}

export const SignIn: React.FC<SignInProps> = ({ props: { title, description, onCloseAction, onSignInAction, ref } }) => {
    return (
        <div className=" inset-0 flex items-center absolute justify-center shadow-2xl"
            ref={ref}
        >
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white p-4 rounded-md shadow-xl z-10 w-80">
                <div>
                    <h4 className="text-2xl font-bold mb-2">{title}</h4>
                </div>
                <div className="text-gray-700">{description}</div>
                <div className="mt-4 justify-around flex">
                    <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out" onClick={onCloseAction}>
                        close
                    </button>
                    <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out" onClick={onSignInAction}>
                        Signin
                    </button>
                </div>
            </div>
        </div>
    );
};
