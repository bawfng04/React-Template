import "./Login.css";
import React, { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    if (username === "bang" && password === "bang") {
      onLogin();
    } else {
      setError("Invalid username or password");
      setTimeout(() => {
        setError("");
      }, 8000);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
          <div className="passField">
            <input
              className="input"
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="showPasswordButton"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

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
