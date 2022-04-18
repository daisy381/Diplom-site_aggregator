import React from 'react';
import { Navigate } from 'react-router-dom';
import { getCookie } from '../../helpers/util';

function PrivateRoute({ children }) {
    const token = getCookie('token');

    return token ? children : <Navigate to="/signin" />;
}

export default PrivateRoute;
