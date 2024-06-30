import React from "react";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="appHeader">
        <Header />
      </div>
      <div>
        <Login />
      </div>
      <div className="appFooter">
        <Footer />
      </div>
    </div>
  );
}

export default App;
