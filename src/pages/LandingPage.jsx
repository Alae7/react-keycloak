import React from 'react';
import { useKeycloak } from '@react-keycloak/web';

const LandingPage = () => {
    const { keycloak } = useKeycloak();

    const handleLogin = () => {
        keycloak.login({ redirectUri: window.location.origin + '/dashboard' });
    };

    return (
        <div style={{ textAlign: 'center', padding: '4rem' }}>
            <h1>🏦 Welcome to the Open Banking Portal</h1>
            <p>Connect, authorize and manage your financial services securely.</p>

            {!keycloak.authenticated && (
                <button onClick={handleLogin} style={{ marginTop: '2rem', padding: '1rem 2rem' }}>Login</button>
            )}
        </div>
    );
};

export default LandingPage;
