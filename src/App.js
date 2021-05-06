import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home/Home";
import Indoor from "./components/pages/Indoor/Indoor";
import Outdoor from "./components/pages/Outdoor/Outdoor";
import Pantry from "./components/pages/Pantry/Pantry";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/indoor" component={Indoor} />
        <Route exact path="/outdoor" component={Outdoor} />
        <Route path="/pantry" component={Pantry} />
      </div>
    </Router>
  );
}

export default App;
