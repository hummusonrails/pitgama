import React from 'react';

class Home extends React.Component {

  render() {

    return (
      <div>
        <div className="splash-container">
          <div className="intro-box">
            <h1 className="body-title">Welcome</h1>
            <p className="body-intro">
              Data driven insights in Jewish text
            </p>
            <button className="banner-button"><a href="/pitgama">Get Started</a></button>
          </div>
        </div>
        <div className="feature-display-container">
          <div className="home-feature-box">
            <span className="home-feature-box-header"><a href="/about">ABOUT</a></span>
          </div>
          <div className="home-feature-box">
            <span className="home-feature-box-header"><a href="/features">FEATURES</a></span>
          </div>
          <div className="home-feature-box">
            <span className="home-feature-box-header"><a href="/contact">CONTACT</a></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
