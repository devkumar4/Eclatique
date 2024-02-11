
import { handleSignIn, handleSignUp } from "../api/api";
import Cookies from "js-cookie";



export const useSignin = async (formData, setError) => {
    try {
        const data = await handleSignIn(formData)



        Cookies.set("accessToken", data.accessToken);
        Cookies.set("refreshToken", data.refreshToken);
        localStorage.setItem("accessToken", JSON.stringify(data.accessToken));
        localStorage.setItem("refreshToken", JSON.stringify(data.refreshToken)); //

        console.log("Access Token:", data.accessToken);
        console.log("Refresh Token:", data.refreshToken);


        console.log("Access Token:", data.accessToken);
        console.log("Refresh Token:", data.refreshToken);
        return handleSignIn;
    } catch (error: any) {
        setError(error)

    }
};

export const useSignUp = async (formData, setError) => {
    try {
        const data = await handleSignUp(formData)



        Cookies.set("accessToken", data.accessToken);
        Cookies.set("refreshToken", data.refreshToken);
        localStorage.setItem("accessToken", JSON.stringify(data.accessToken));
        localStorage.setItem("refreshToken", JSON.stringify(data.refreshToken)); //

        console.log("Access Token:", data.accessToken);
        console.log("Refresh Token:", data.refreshToken);


        console.log("Access Token:", data.accessToken);
        console.log("Refresh Token:", data.refreshToken);
        return handleSignIn;
    } catch (error: any) {
        setError(error)

    }
};