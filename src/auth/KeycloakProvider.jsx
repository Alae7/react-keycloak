import React from 'react';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './keycloak';

const KeycloakProviderWrapper = ({ children }) => {
    return (
        <ReactKeycloakProvider
            authClient={keycloak}
            initOptions={{
                onLoad: 'check-sso',
                silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
            }}
            onTokens={(tokens) => {
                localStorage.setItem('kc_token', tokens.token);
                localStorage.setItem('kc_refreshToken', tokens.refreshToken);
            }}
        >
            {children}
        </ReactKeycloakProvider>
    );
};

export default KeycloakProviderWrapper;
