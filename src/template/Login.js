import React, { useState, useEffect } from "react";
import Register from "./Register";
import "./Authentication.css";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (error) {
      timeoutId = setTimeout(() => {
        setError("");
      }, 8000);
    }
    return () => clearTimeout(timeoutId);
  }, [error]);

  const handleLogin = (event) => {
    event.preventDefault();
    const userAccounts = JSON.parse(
      localStorage.getItem("userAccounts") || "{}"
    );
    if (userAccounts[username] && userAccounts[username] === password) {
      setLogged(true);
      setTimeout(onLogin, 1500);
    } else {
      if (username === "") {
        setError("Please input username");
      } else if (password === "") {
        setError("Password can't be empty");
      } else {
        setError("Invalid username or password");
      }
    }
  };

  const handleRegister = () => {
    setIsRegistering(false);
  };

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };

  return (
    <div className="Main">
      {isRegistering ? (
        <Register
          //set the onRegister prop to false
          onRegister={handleRegister}
          onCancel={() => setIsRegistering(false)}
        />
      ) : (
        <form onSubmit={handleLogin}>
          {logged && (
            <div className="logged">
              <div className="regSucessNoti">
                <p>Login successful!</p>
              </div>
              <div className="tick"></div>
            </div>
          )}

          <div className="container">
            <h1 className="reText">Login</h1>
            <div className="input-container">
              <input
                className="input"
                type="text"
                placeholder="   "
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label className="lab">Username</label>
            </div>
            <br />
            <div className="input-container">
              <div className="passField">
                <input
                  className="input"
                  //type={showPassword ? "text" : "password"}
                  type="password"
                  placeholder="   "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="lab">Password </label>
                {/* <button
                  type="button"
                  className="showPasswordButton"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "Hide" : "Show"}
                </button> */}
              </div>
            </div>
            <button className="submitButton" type="submit">
              Login
            </button>
            <br />
            <label className="or">or</label>
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
