import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Home from "./home";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <Navbar/>
      <Home/>
      <Footer/>
      {/* <div className="container">
      <header className="App-header">    
          Learn React
      </header>
    </div> */}
    </div>
    </Router>
    
  );
}

export default App;
