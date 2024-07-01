import React, { useState } from "react";
import Register from "./Register";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    const userAccounts = JSON.parse(
      localStorage.getItem("userAccounts") || "{}"
    );
    if (userAccounts[username] && userAccounts[username] === password) {
      onLogin();
    } else {
      if (username === "bang" && password === "bang") {
        onLogin();
      } else {
        setError("Invalid username or password");
        setTimeout(() => {
          setError("");
        }, 8000);
      }
    }
  };

  const handleRegister = () => {
    setIsRegistering(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="Main">
      {isRegistering ? (
        <Register onRegister={handleRegister} />
      ) : (
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
            <br />
            <label className="or">or:</label>
            <button
              type="button"
              className="registerButton"
              onClick={() => setIsRegistering(true)}
            >
              Register
            </button>
            {error && <p className="error">{error}</p>}
          </div>
        </form>
      )}
    </div>
  );
}

export default Login;
