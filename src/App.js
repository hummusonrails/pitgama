import React, { Component } from 'react';
import logo from './static_resources/images/pitgama_header.png';
import './static_resources/stylesheets/Main.css'
import './static_resources/stylesheets/Navbar.css'

class App extends Component {
    render() {
        return (
          <div className="main-container">
            <header className="header">
              <img src={logo} className="logo" alt="pitgama logo" />
              <nav className="nav-container">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a id="align-right" href="#">About</a></li>
                  <li><a id="align-right" href="#">Contact</a></li>
                </ul>
              </nav>
            </header>
            <div className="body-container">
              <div className="intro-box">
                <h1 className="body-title">Welcome to piṯḡāmā</h1>
                <p className="body-intro">
                  Data driven insights in Jewish text
                </p>
                <button className="banner-button"><a href="#">Get Started</a></button>
              </div>
            </div>
          </div>
        );
    }
}

export default App;
