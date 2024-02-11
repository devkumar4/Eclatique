import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser, setUserAuthenticated } from "../red/slices/UserSlice";
import { useSignin } from "../hooks/useAuth";
import AuthForm from "../components/Authform";
import BackButton from "../components/Backbutton";

function SignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignin = async (formData, setError, e) => {
        e.preventDefault();
        try {
            await useSignin(formData, setError);

            dispatch(setUserAuthenticated({ isAuthenticated: true }));
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <AuthForm
                heading={"Sign In"}
                handleSubmit={handleSignin}
                buttonText={"Sign In"}
                linkTo="/signUp"
                indicationText={"Do not have an account?"}
                linkText={"Sign Up here"}
                showPhoneNumberField={true}
            />
        </div>
    );
}

export default SignIn;
