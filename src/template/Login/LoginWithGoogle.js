import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { clientID } from './config';

function LoginWithGoogle() {
    const navigate = useNavigate();
    const onSuccess = (response) => {
        alert('Login with Google success');
        navigate('/hof');
    };
    const onFailure = (response) => {
        alert('Login with Google failed: ' + response.error);
    };

    return (
        <GoogleOAuthProvider clientId={clientID}>
            <div className="LoginWithGoogle">
                <GoogleLogin onSuccess={onSuccess} onError={onFailure} />
            </div>
        </GoogleOAuthProvider>
    );
}

export default LoginWithGoogle;
