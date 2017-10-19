import React, { Component } from 'react';
import logo from './static_resources/images/pitgama_header.png';
import './App.css';
import './static_resources/stylesheets/Main.css'
import './static_resources/stylesheets/Navbar.css'

class App extends Component {
    render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="pitgama logo" />
              <nav className="nav-container">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </nav>
              <h1 className="App-title">Welcome to pitgama</h1>
            </header>
            <p className="App-intro">
              Some filler text.
            </p>
          </div>
        );
    }
}

export default App;
