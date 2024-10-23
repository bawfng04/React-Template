import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./template/Login/Login";
import Header from "./template/Feedhoot/Header";
import Footer from "./template/Feedhoot/Footer";
import Shop from "./core/pages/Shop/Shop";
import Blog from "./core/pages/Blog/Blog";
import Home from "./core/pages/Home/Home";
import LandingPage from "./core/pages/LandingPage/LandingPage";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <div className="App">
      <BrowserRouter>
        {!isLoggedIn && <Login onLogin={handleLogin} />}
        {isLoggedIn && (
          <div className="totalContainer">
            <Header onLogout={handleLogout} />
            <div className="mainContent">
              <Routes>
                <Route path="/shop" element={<Shop />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<LandingPage />} />
              </Routes>
            </div>
            <Footer />
          </div>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
