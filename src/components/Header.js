import React from 'react';
import logo from '../static_resources/images/pitgama_header.png';

class Header extends React.Component {

  render() {

    return (
      <header className="header">
        <a href="/"><img src={logo} className="logo" alt="pitgama logo" /></a>
        <nav className="nav-container">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a id="align-right" href="#">About</a></li>
            <li><a id="align-right" href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
