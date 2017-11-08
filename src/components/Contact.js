import React from 'react';

import {pitgamaTeam} from '../data/pitgamaTeam.js'
import PitgamaMember from './containers/PitgamaMember'

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

        {pitgamaTeam.map(member => {
              return <PitgamaMember member={member} key={Math.floor(100000 + Math.random() * 900000)}/>
            })}
    </div>
    );
  }
}

export default Contact;
