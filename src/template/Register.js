import "./Authentication.css";
import React, { useState } from "react";

function Register({ onRegister, onCancel }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleRedirect = () => {
    setRedirect(true);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const userAccounts = JSON.parse(
      //parse a string and return an object
      localStorage.getItem("userAccounts") || "{}"
    );
    if (userAccounts[username]) {
      setError("Username already exists");
      setTimeout(() => {
        setError("");
      }, 8000);
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      setTimeout(() => {
        setError("");
      }, 8000);
      return;
    }
    if (password.length > 24) {
      setError("Password must be at most 24 characters long");
      setTimeout(() => {
        setError("");
      }, 8000);
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords does not match");
      setTimeout(() => {
        setError("");
      }, 8000);
      return;
    }
    userAccounts[username] = password;
    localStorage.setItem("userAccounts", JSON.stringify(userAccounts));
    setRegisterSuccess(true);
    setTimeout(handleRedirect, 1000);
    setTimeout(onRegister, 3000);
  };

  return (
    <div className="Main">
      {registerSuccess && (
        <div className="regSucessNoti">
          <p>Registration successful!</p>
        </div>
      )}
      {redirect && (
        <div className="regSucessNoti">
          <p>Redirecting you to login page...</p>
        </div>
      )}

      <form onSubmit={handleRegister}>
        <div className="container">
          <div>
            <h1 className="reText">Register</h1>
            <label className="lab" htmlFor="username">
              Username:
            </label>
            <input
              className="input"
              type="text"
              id="username"
              name="username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />

            <label className="lab" htmlFor="password">
              Password:
            </label>
            <input
              className="input"
              type="password"
              id="password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />

            <label className="lab" htmlFor="confirmPassword">
              Confirm Password:
            </label>
            <input
              className="input"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <br></br>
          <br></br>
          <button className="registerButton" type="submit">
            Register
          </button>
          <button className="cancelButton" onClick={onCancel}>
            Cancel
          </button>
          {error && <p className="error">{error}</p>}
        </div>
      </form>
    </div>
  );
}

export default Register;
