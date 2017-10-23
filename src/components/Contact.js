import React from 'react';
import ben_pic from '../static_resources/images/ben.png';
import malki_pic from '../static_resources/images/malki.jpg';
import yechiel_pic from '../static_resources/images/yechiel.jpg';
import github_icon from '../static_resources/images/github.png';
import facebook_icon from '../static_resources/images/facebook.png';
import twitter_icon from '../static_resources/images/twitter.png';

class Contact extends React.Component {

  render() {

    return (
      <div>

        <div className="splash-container">
          <div className="intro-box">
            <h1 className="body-title">Contact</h1>
            <p className="body-intro">
              Meet the Pitgama Team
            </p>
          </div>
        </div>

        <div className="contact-opening">
          <p>We are three people who love data analysis, coding and Jewish text and the intersection of the three. We imagine this project as an ongoing labor of love to continue to glean new insights from classic texts using modern analysis constructing algorithms that let us search broadly and deeply simultaneously.</p>
          <p>Please feel free to get in touch with us via the links below. We welcome contributors to this project and we look forward to hearing from you!</p>
        </div>

        <div className="bio-display-container">
          <div className="feature-box">

          <div className="bio-container">
            <div className="image-container">
              <div className="image-content">
                <img src={ben_pic}/>
              </div>
            </div>
            <div className="right-container">
              <div className="right-content">
                <h5 className="bio-title">Ben Greenberg</h5>
                <p className="bio-desc">Ben is a former Hillel and congregational rabbi who loves thinking about the ways Jewish texts are interconnected. He recently graduated from the full stack online program at the Flatiron School and currently works as an Online Technical Coach at WeWork.</p>
                <p className="social-links"><a href="https://github.com/benhayehudi"><img src={github_icon} width="40px" height="40px" alt="github icon"/></a><a href="https://twitter.com/RabbiGreenberg"><img src={twitter_icon} width="40px" height="40px" alt="twitter icon"/></a></p>
              </div>
            </div>
          </div>

          <div className="bio-container">
            <div className="image-container">
              <div className="image-content">
                <img src={malki_pic}/>
              </div>
            </div>
            <div className="right-container">
              <div className="right-content">
                <h5 className="bio-title">Malki Davis</h5>
                <p className="bio-desc">Background of IT, now venturing into the world of software engineering. Familiar with Ruby/Rails, Javascript, JQuery, React, Redux, Elixir, and many more on the list to learn!</p>
                <p className="social-links"><a href="https://github.com/mxdavis/"><img src={github_icon} width="40px" height="40px" alt="github icon"/></a><a href="#"><img src={twitter_icon} width="40px" height="40px" alt="twitter icon"/></a></p>
              </div>
            </div>
          </div>

          <div className="bio-container">
            <div className="image-container">
              <div className="image-content">
                <img src={yechiel_pic}/>
              </div>
            </div>
            <div className="right-container">
              <div className="right-content">
                <h5 className="bio-title">Yechiel Kalmenson</h5>
                <p className="bio-desc">Brooklyn born and bred, I Got my rabbinical training in Israel. Went on to teach third grade in the Jewish Online School and adult education through Chabad. After a brief stint in tech support, I went on to study web development. I currently live in Brooklyn, NY with my family, supporting my passions for teaching, coding, and flying.</p>
                <p className="social-links"><a href="https://github.com/achasveachas/"><img src={github_icon} width="40px" height="40px" alt="github icon"/></a><a href="https://twitter.com/yechielk"><img src={twitter_icon} width="40px" height="40px" alt="twitter icon"/></a></p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
    );
  }
}

export default Contact;
