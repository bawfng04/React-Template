import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./core/pages/Shop";
import Blog from "./core/pages/Blog";
import "./App.css";
import Login from "./template/Login";
import Header from "./template/Header";
import Main from "./core/Main";
import Footer from "./template/Footer";

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
        <div>
          <Header onLogout={handleLogout} />
          <BrowserRouter>
            <Routes>
              <Route path="/shop" element={<Shop />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/" element={<Main />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
