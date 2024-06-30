import "./Login.css";
import React, { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    if (username === "bang" && password === "bang") {
      onLogin();
    } else {
      setError("Invalid username or password");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <div className="Main">
      <form onSubmit={handleLogin}>
        <div className="container">
          <label className="lab">Username: </label>
          <input
            className="input"
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label className="lab">Password: </label>
          <input
            className="input"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button className="submitButton" type="submit">
            Login
          </button>
          {error && <p className="error">{error}</p>}
        </div>
      </form>
    </div>
  );
}

export default Login;
