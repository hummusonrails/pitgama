import React from 'react';
import ben_pic from '../static_resources/images/ben.png';
import malki_pic from '../static_resources/images/malki.jpg';
import yechiel_pic from '../static_resources/images/yechiel.jpg';

class Contact extends React.Component {

  render() {

    return (
      <div>
        <div className="splash-container">
          <div className="intro-box">
            <h1 className="body-title">Contact</h1>
            <p className="body-intro">
              Get in touch with us
            </p>
          </div>
        </div>
        <div className="feature-display-container">
          <div className="feature-box">
          <div className="bio_box">
            <span id="bio_pic"><img src={ben_pic}/></span>
          </div>
          <br />
          <div className="bio_box">
            <span id="bio_pic"><img src={malki_pic}/></span>
          </div>
          <br />
          <div className="bio_box">
            <span id="bio_pic"><img src={yechiel_pic}/></span>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
