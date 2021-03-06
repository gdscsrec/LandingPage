import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Achievements from "./components/pages/AchievementPage/Achievements";
import About from "./components/pages/AboutPage/About.js";
import Home from "./components/pages/Home/Home";
import Events from "./components/pages/EventsPage/Events.js";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar />

        <Switch>
          <Route path="/Achievements" exact component={Achievements} />
          <Route path="/About" exact component={About} />
          <Route path="/Home" exact component={Home} />
          <Route path="/" exact component={Home} />
          <Route path="/Events" exact component={Events} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
