import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { setUser } from '../red/slices/UserSlice';

const AuthMiddleware: React.FC = ({ children }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const accessTokenCookies = Cookies.get('accessToken');
        const refreshTokenCookies = Cookies.get('refreshToken');

        if (!accessTokenCookies || !refreshTokenCookies) {
            // Redirect to the sign-in page if tokens are not present
            navigate('/signIn');
        } else {
            // Dispatch the setUser action to update Redux state
            dispatch(setUser({ isAuthenticated: true }));
        }
    }, [dispatch, navigate]);

    return <>{children}</>;
};

export default AuthMiddleware;
