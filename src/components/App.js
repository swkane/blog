import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Blogger</h2>
        </div>
        <p className="App-intro">
          To get started, simply write a blog.
        </p>
      </div>
    );
  }
}

export default App;
