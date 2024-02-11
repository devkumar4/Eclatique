import { useNavigate } from "react-router-dom";
import { setUser } from "../red/slices/UserSlice";
import { useDispatch } from "react-redux";
import { useSignUp } from "../hooks/useAuth";
import AuthForm from "../components/Authform";

function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignUp = async (formData, setError, e) => {
        e.preventDefault();
        try {
            await useSignUp(formData, setError);

            dispatch(setUser({ isAuthenticated: true }));
            navigate("/signin");
        } catch (error: any) {
            setError(error.message);
        }
    };

    return (
        <AuthForm
            heading={"Sign Up"}
            handleSubmit={handleSignUp}
            buttonText={"Sign In"}
            linkTo="/signin"
            indicationText={"Already have an account?"}
            linkText={"Sign In here"}
            showPhoneNumberField={true}
            showEmailField={true}
        />
    );
}

export default Signup;
