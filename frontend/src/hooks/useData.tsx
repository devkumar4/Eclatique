import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import axios from "axios";
import { setUser } from "../red/slices/UserSlice";
import { API_URL_GET_USER } from "../api/apiConfig";

const useFetchUser = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

    console.log(isAuthenticated);

    const accessToken = Cookies.get("accessToken");

    useEffect(() => {
        const fetchUser = async () => {
            try {
                console.log('inside hook');

                if (!isAuthenticated || !accessToken) {
                    return;
                }

                const response = await axios.get(API_URL_GET_USER, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                    withCredentials: true,
                });

                if (!response.data) {
                    throw new Error("Failed to fetch user details");
                }

                const user = response.data.user;

                dispatch(setUser({ isAuthenticated: true, user: user }));
            } catch (error) {
                console.error("Error fetching user details:", error);
            }
        };

        fetchUser();
    }, [dispatch, isAuthenticated, accessToken]);
    return isAuthenticated;
};

export default useFetchUser;
