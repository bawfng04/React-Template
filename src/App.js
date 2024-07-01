import React from "react";
import "./App.css";
import Login from "./template/Login";
import Header from "./template/Header";
import Main from "./core/Main";
import Footer from "./template/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <div className="App">
      {!isLoggedIn && <Login onLogin={() => setIsLoggedIn(true)} />}
      {isLoggedIn && (
        <div>
          <Header />
          <Main />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
