import React, { Component } from 'react';
import logo from './logo.svg';

import "./App.css"

import { ConnectedRouter } from 'connected-react-router'

//routes
import routes from './routes';
class App extends Component {
  render() {
    var history = this.props.history;

    return (
      <ConnectedRouter history={history}>
        { routes }
      </ConnectedRouter>
    );
  }
}

export default App;
