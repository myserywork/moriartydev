import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./Header";
import Blog from "./Blog";
import Home from "./Home";
import Admin from "./Admin";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <main>
              <Header />
              <Home />
            </main>
          </Route>

          <Route path="/blog/:id" component={Blog} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </Router>
    );
  }
}
