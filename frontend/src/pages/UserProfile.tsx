import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../red/slices/UserSlice";
import useFetchUser from "../hooks/useUserData";
import { Loader } from "../components/Loader";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user)
    const userDetails = useFetchUser();
    const navigate = useNavigate();

    const handleLogOut = async () => {
        try {

            // Call logout API
            await axios.post("http://localhost:8080/auth/logout");
            // Dispatch action to clear user state
            dispatch(setUser({ isAuthenticated: false, user: null }));
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    if (!user) {
        return (
            <div className="justify-center flex h-screen items-center">
                <Loader loaderHeight={10} loaderWidth={10} />
            </div>
        );
    }

    return (
        <div>
            <h2>User Profile</h2>
            {user.isAuthenticated == true ? (
                <div>
                    <p>Name: {userDetails?.user?.firstName}</p>
                    <p>Email: {userDetails?.user?.email}</p>
                    <p>City: {userDetails?.user?.shippingAddress?.city}</p>
                    <button onClick={() => navigate("/explore/order/orderHistory")}>View Orders</button>
                </div>
            ) : <div>
                <h1>please signIn</h1>
            </div>}

            {user.isAuthenticated == true ? (
                <button onClick={handleLogOut}>Log out</button>
            ) : (
                <button>Sign In</button>
            )}
        </div>
    );
};

export default UserProfile;
