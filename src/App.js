import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./template/Login";
import Header from "./template/Header";
import Footer from "./template/Footer";
import Shop from "./core/pages/Shop";
import Blog from "./core/pages/Blog";
import Home from "./core/Home";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  //   localStorage.setItem("isLoggedIn", "true");
  // };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
  };

  return (
    <div className="App">
      {!isLoggedIn && <Login onLogin={() => setIsLoggedIn(true)} />}
      {isLoggedIn && (
        <div className="totalContainer">
          <Header onLogout={handleLogout} />
          <div className="mainContent">
            <BrowserRouter>
              <Routes>
                <Route path="/shop" element={<Shop />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/" element={<Home />} />
              </Routes>
            </BrowserRouter>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
