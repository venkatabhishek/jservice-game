import React, { Component } from 'react';
import logo from './logo.svg';
import Quiz from "./components/Quiz";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Quiz />
      </div>
    );
  }
}

export default App;
