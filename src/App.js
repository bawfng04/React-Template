import React from "react";
import "./App.css";
import Login from "./components/Login";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

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
