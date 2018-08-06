import React, { Component } from 'react';
import './App.css';
import Device from './components/Device/Device';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header id="nav-div">
          <h1 id="title">React Calculator</h1>
        </header>
        <Device />
        <footer id='footer'>
          <header id="footer-note">
            <em>Craig Andrew Blair &copy; 2018</em>
          </header>
        </footer>
      </div>
    );
  }
}

export default App;
