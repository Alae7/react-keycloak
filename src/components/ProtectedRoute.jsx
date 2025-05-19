import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';

const ProtectedRoute = ({ children }) => {
    const { keycloak, initialized } = useKeycloak();
    const location = useLocation();

    if (!initialized) {
        return <div>⏳ Chargement de l’authentification...</div>;
    }

    if (!keycloak.authenticated) {
        return <Navigate to="/" state={{ from: location.pathname }} replace />;
    }

    return children;
};

export default ProtectedRoute;
