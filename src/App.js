import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GitHubScoreApp from './components/GitHubScoreApp';

class App extends Component {
  render() {
    return (
      <div className="App">
       <GitHubScoreApp/>
      </div>
    );
  }
}

export default App;
