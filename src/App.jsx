import React, { Component } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom'
import './App.scss';
import Login from './views/Login'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact component={Login} path='/' />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
