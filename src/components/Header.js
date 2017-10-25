import React from 'react';
import logo from '../static_resources/images/pitgama_header.png';

class Header extends React.Component {

  render() {

    return (
      <header className="header">
        <a href="/"><img src={logo} className="logo" alt="pitgama logo" /></a>
        <nav className="nav-container">
          <ul id="align-left">
            <li id="align-left"><a href="/">Home</a></li>
            <li id="align-left"><a href="#">Features</a></li>
            <li id="align-left"><a href="#">Resources</a></li>
            <li id="align-right"><a href="/about">About</a></li>
            <li id="align-right"><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
