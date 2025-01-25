import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

const Login = lazy(() => import('./pages/login'));
const User = lazy(() => import('./pages/user'));
const Products = lazy(() => import('./pages/products'));

const AppRoutes = () => {
    const user = useSelector((state: RootState) => state.authClice.user);

    return (
        <Routes>
            <Route
                path="/login"
                element={user ? <Navigate to="/user" /> : <Login />}
            />
            <Route
                path="/user"
                element={user ? <User /> : <Navigate to="/login" />}
            />
            <Route
                path="/products"
                element={user && user.role === 'admin' ? <Products /> : <Navigate to="/login" />}
            />
            <Route path="*" element={<Navigate to={user ? "/user" : "/login"} />} />
        </Routes>
    );
};

export default AppRoutes;