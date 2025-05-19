import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    // url: 'https://192.168.1.101:8443',
    // realm: 'AdaptiveIt',
    // clientId: 'react-client-a'
    url: 'http://localhost:8080',
    realm: 'auth-service',
    clientId: 'react-client-a'

});

export default keycloak;
