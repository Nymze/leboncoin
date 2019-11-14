import React from "react";
import "./App.css";
import About from "./components/About";
import Shop from "./components/Shop";
import Nav from "./components/Nav";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Hero from "./components/Hero";
import ItemDetail from "./components/ItemDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Hero />
        <Switch>
          <Route path="/" exact component={Shop} />
          <Route path="/about" component={About} />
          <Route path="/Shop" exact component={Shop} />
          <Route path="/Shop/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
