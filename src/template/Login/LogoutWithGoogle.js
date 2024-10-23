import React from 'react';
import { googleLogout } from '@react-oauth/google';

function LogoutWithGoogle() {
    const onLogoutSuccess = () => {
        alert('Logout success');
    };

    const handleLogout = () => {
        googleLogout();
        onLogoutSuccess();
    };

    return (
        <div className="LogoutWithGoogle">
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default LogoutWithGoogle;
