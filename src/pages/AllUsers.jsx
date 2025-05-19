import React, { useEffect, useState } from 'react';
import { useKeycloak } from '@react-keycloak/web';
import { getAllUsers } from '../services/apiService.js';

const AllUsers = () => {
    const { keycloak } = useKeycloak();
    const [users, setUsers] = useState([]);

    useEffect(() => {
            getAllUsers()
                .then(res => setUsers(res.data))
                .catch(err => console.error('Error fetching users:', err));
    },[]);

    const handleLogout = () => {
        keycloak.logout({ redirectUri: window.location.origin + '/' });
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Bienvenue {keycloak.tokenParsed?.preferred_username} dans la liste des utilisateurs</h1>
            <button className="p-3 m-3" onClick={handleLogout}>Déconnexion</button>

            <table border="2" cellPadding="5" style={{width: '100%' , textAlign: 'center', margin: '2rem'}}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nom d'utilisateur</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;
