import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './Header';
import SimpleHeader from './SimpleHeader';
import Home from './Home';
import Agenda from './Agenda';
import Footer from './sections/Footer';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      titulo: 'Live do Ricardo'
    }
  }

  render() {
    return (
      <main>
        <Router>
          <Switch>
            <Route path="/agenda">
              <SimpleHeader />
              <Agenda />
            </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </main>
    )
  }
}
