import "./Authentication.css";
import React, { useState } from "react";

function Register({ onRegister, onCancel }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    const userAccounts = JSON.parse(
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
      setError("Passwords do not match");
      setTimeout(() => {
        setError("");
      }, 8000);
      return;
    }
    userAccounts[username] = password;
    localStorage.setItem("userAccounts", JSON.stringify(userAccounts));
    onRegister();
    alert("Account created successfully. You can now login.");
  };

  return (
    <div className="Main">
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
