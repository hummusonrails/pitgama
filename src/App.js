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
                  piṯḡāmā: פִּתְגָמָא (Aramaic) - a word or phrase
                  <br/>
                  Borrowed from the Persian <i>patgam</i>, which is translated as that which has come to, that which has arrived.
                  <br/>
                  Pitgama will utilize the Sefaria.org API to explore ideas and connections in Jewish wisdom literature.
                </p>
                <button className="banner-button"><a href="#">Get Started</a></button>
              </div>
            </div>
          </div>
        );
    }
}

export default App;
