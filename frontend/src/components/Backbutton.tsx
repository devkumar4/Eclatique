import { useNavigate } from "react-router-dom";

const BackButton = ({ iconColor = "black", fillColor = "black", textColor = 'black' }) => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(-1)}
            className="back-button transform transition-transform hover:scale-105 hover:shadow hover:underline flex"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={fillColor}
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`w-6 h-6 mr-2 text-${iconColor}`}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                />
            </svg>
            <span className={`font-mono font-bold text-${textColor}`}>Go Back</span>
        </button>
    );
};

export default BackButton;
