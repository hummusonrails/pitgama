import React from 'react';
import github_icon from '../static_resources/images/github.png';
import facebook_icon from '../static_resources/images/facebook.png';
import twitter_icon from '../static_resources/images/twitter.png';

class Header extends React.Component {

  render() {

    return (
      <div className="footer-container">
        <div className="footer-content">
          &copy;2017 Pitgama: Data Driven Insights in Jewish Text
          <br />
          Made with <span id="heart">&#9829;</span> by Ben, Malki & Yechiel
          <br />
          <a href="https://github.com/benhayehudi/pitgama"><img src={github_icon} width="40px" height="40px" alt="github icon"/></a> <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A//pitgama.herokuapp.com"><img src={facebook_icon} width="40px" height="40px" alt="facebook icon"/></a> <a href="https://twitter.com/home?status=Check%20out%20Pitgama%3A%20Data%20Driven%20Insights%20in%20Jewish%20Text%20at%20http%3A//pitgama.herokuapp.com"><img src={twitter_icon} width="40px" height="40px" alt="twitter icon"/></a>
        </div>
      </div>
    );
  }
}

export default Header;
