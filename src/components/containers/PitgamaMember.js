import React from 'react';

import github_icon from '../../static_resources/images/github.png';
import twitter_icon from '../../static_resources/images/twitter.png';

const PitgamaMember = (props) =>  {
  const {name, image, description, github, twitter} = props.member
  return (
    <div className="bio-display-container">
      <div className="feature-box">
        <div className="bio-container">
          <div className="image-container">
            <div className="image-content">
              <img src={image} alt={name}/>
            </div>
          </div>

          <div className="right-container">
            <div className="right-content">
              <h5 className="bio-title">{name}</h5>
              <p className="bio-desc">{description}</p>
              <p className="social-links"><a target="_blank" href={github}><img src={github_icon} width="40px" height="40px" alt="github icon"/></a><a target="_blank" href={twitter}><img src={twitter_icon} width="40px" height="40px" alt="twitter icon"/></a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PitgamaMember;
