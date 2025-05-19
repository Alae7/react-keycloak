import React, {useEffect, useState} from 'react';
import { useKeycloak } from '@react-keycloak/web';
import {useNavigate} from "react-router-dom";
import {getCurrentUser} from "../services/apiService.js";

const Home = () => {
    const { keycloak } = useKeycloak();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        getCurrentUser()
            .then(res => setUser(res.data))
            .catch(err => console.error(err));
    }, []);

    const handleLogout = () => {
        keycloak.logout({
            redirectUri: window.location.origin + '/',
        });
    };
    const goToUsers = () => {
        navigate('/users');
    };

    return user ? (
        <div style={{padding: '2rem'}}>
            <h1>Bienvenue {keycloak.tokenParsed?.preferred_username}</h1>
            <button className="p-3 m-3" onClick={handleLogout}>Déconnexion</button>
            <button className="p-3 m-3  " onClick={goToUsers}>users</button>
            <div className={"p-md-5"}>
                <h2>Bienvenue, {user.username}</h2>
                <p>Email : {user.email}</p>
            </div>
        </div>
    ): (
        <p>Chargement...</p>
    );
};

export default Home;
