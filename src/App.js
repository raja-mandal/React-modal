import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Modal from "react-modal";
// import "./App.css";

import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
