import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import KeycloakProviderWrapper from "./auth/KeycloakProvider.jsx";

createRoot(document.getElementById('root')).render(

    <KeycloakProviderWrapper>
        <App />
    </KeycloakProviderWrapper>
)
