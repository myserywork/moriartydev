import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Blog from "./Blog";
import Home from "./Home";

import Footer from "./sections/Footer";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: "Live do Ricardo",
    };
  }

  render() {
    return (
      <main>
        <Router>
          <Switch>
            <Route path="/blog/:id" component={Blog}>
              <Blog />
            </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
            <Route path="">
              <Header />
              <Home />
            </Route>
          </Switch>
        </Router>
      </main>
    );
  }
}
