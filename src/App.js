import React, { Component } from 'react';
import logo from './static_resources/images/pitgama_header.png';
import './static_resources/stylesheets/Main.css'
import './static_resources/stylesheets/Navbar.css'
import './static_resources/stylesheets/Footer.css'

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
            <div className="splash-container">
              <div className="intro-box">
                <h1 className="body-title">Welcome</h1>
                <p className="body-intro">
                  Data driven insights in Jewish text
                </p>
                <button className="banner-button"><a href="#">Get Started</a></button>
              </div>
            </div>
            <div className="feature-display-container">
              <div className="feature-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit metus, vulputate in consectetur et, porttitor ut nibh. Aliquam rhoncus enim tristique magna auctor hendrerit. Vestibulum cursus cursus mauris, ut faucibus ligula sollicitudin venenatis. Nulla facilisi. Sed commodo mauris sed mauris efficitur dictum. Nam suscipit risus eu arcu vulputate tempor. Maecenas varius, lorem at cursus consequat, augue tortor suscipit augue, id vulputate nibh mauris nec eros. Nulla facilisi. Morbi pulvinar varius velit, aliquet malesuada ex dignissim ut.
              </div>
              <div className="feature-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit metus, vulputate in consectetur et, porttitor ut nibh. Aliquam rhoncus enim tristique magna auctor hendrerit. Vestibulum cursus cursus mauris, ut faucibus ligula sollicitudin venenatis. Nulla facilisi. Sed commodo mauris sed mauris efficitur dictum. Nam suscipit risus eu arcu vulputate tempor. Maecenas varius, lorem at cursus consequat, augue tortor suscipit augue, id vulputate nibh mauris nec eros. Nulla facilisi. Morbi pulvinar varius velit, aliquet malesuada ex dignissim ut.
              </div>
              <div className="feature-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit metus, vulputate in consectetur et, porttitor ut nibh. Aliquam rhoncus enim tristique magna auctor hendrerit. Vestibulum cursus cursus mauris, ut faucibus ligula sollicitudin venenatis. Nulla facilisi. Sed commodo mauris sed mauris efficitur dictum. Nam suscipit risus eu arcu vulputate tempor. Maecenas varius, lorem at cursus consequat, augue tortor suscipit augue, id vulputate nibh mauris nec eros. Nulla facilisi. Morbi pulvinar varius velit, aliquet malesuada ex dignissim ut.
              </div>
            </div>
            <div className="footer-container">
              <div className="footer-content">
                FOOTER CONTENT HERE
              </div>
            </div>
          </div>
        );
    }
}

export default App;
