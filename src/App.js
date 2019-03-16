import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Contact from "./pages/contact";
import Partners from "./pages/partner";
import NavBar from "./components/navbar";


class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/nav' component={NavBar} />
          <Route exact path='/partners' component={Partners} />
        </Switch>
      </main>
    );
  }
}

export default App;
