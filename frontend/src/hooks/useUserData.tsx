// useFetchUser.js
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { API_URL_GET_USER } from "../api/apiConfig";

const useFetchUser = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const accessToken = Cookies.get("accessToken");

    useEffect(() => {
        const fetchUser = async () => {
            try {
                console.log("inside hook");

                if (!accessToken) {
                    throw new Error("Access token not found");
                }

                const response = await axios.get(API_URL_GET_USER, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                    withCredentials: true,
                });

                if (!response.data || !response.data.user) {
                    throw new Error("Failed to fetch user details");
                }

                const userData = response.data.user;
                setUser(userData);
            } catch (error) {
                console.error("Error fetching user details:", error);
                setError(error.message);
            }
        };

        fetchUser();
    }, [accessToken]);

    return { user, error };
};

export default useFetchUser;
