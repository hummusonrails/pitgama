import React from 'react';
import logo from '../static_resources/images/pitgama_header.png';

class Header extends React.Component {

  render() {

    return (
      <header className="header">
        <a href="/"><img src={logo} className="logo" alt="pitgama logo" /></a>
        <nav className="nav-container">
          <ul id="align-left">
            <div>
              <li id="align-left"><a href="/">Home</a></li>
            </div>
            <div className="dropdown">
              <li id="align-left"><a href="/features">Features</a></li>
              <div className="dropdown-content">
                <li id="align-left"><a href="/features/bruriah">Bruriah in the Talmud</a></li>
              </div>
            </div>
            <div>
              <li id="align-right"><a href="/about">About</a></li>
            </div>
            <div>
              <li id="align-right"><a href="/contact">Contact</a></li>
            </div>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
