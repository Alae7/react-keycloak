// keycloak.js
import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    url: 'https://192.168.1.101:8443',
    realm: 'AdaptiveIt',
    clientId: 'adaptive-dev-client'
});

export default keycloak;
