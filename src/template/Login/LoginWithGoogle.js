import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { clientID } from "./config";

function LoginWithGoogle({ successLogin, failureLogin }) {
  const navigate = useNavigate();
  const onSuccess = (response) => {
    successLogin();
    navigate("/home");
  };
  const onFailure = (response) => {
    failureLogin();
    alert("Login with Google failed: " + response.error);
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
