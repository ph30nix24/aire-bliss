import React from 'react';
import { useAuth } from '../features/auth/hooks/useAuth';
import Loader from './Loader';
import { Navigate, useLocation } from 'react-router'
const Protect = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation()
    console.log(user)
    if (loading) {
        return (
            <div className='w-full h-screen center'>
                <Loader />
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/auth/login" replace state={{ from: location.pathname }} />;
    }

    return children;
};

export default Protect;