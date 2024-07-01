import "./Login.css"; // Assuming you want to use the same CSS for simplicity
import React, { useState } from "react";

function Register({ onRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    const userAccounts = JSON.parse(
      localStorage.getItem("userAccounts") || "{}"
    );
    if (!userAccounts[username]) {
      userAccounts[username] = password;
      localStorage.setItem("userAccounts", JSON.stringify(userAccounts));
      onRegister(); // Call the onRegister function passed as props
      alert("Account created successfully. Please login.");
    } else {
      setError("Username already exists");
      setTimeout(() => {
        setError("");
      }, 8000);
    }
  };

  return (
    <div className="Main">
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default Register;
