import React from 'react';


class Features extends React.Component {

  render() {

    return (
      <div>

        <div className="splash-container">
          <div className="intro-box">
            <h1 className="body-title">Features</h1>
            <p className="body-intro">
              Explore Pitgama
            </p>
          </div>
        </div>

        <div className="fix-height">
          <div className="feature-display-container">
            <div className="feature-box">
              <p id="text-align-left"><span id="opening-sentence">Explore the latest feature additions to Piṯḡāmā</span></p>

              <p id="text-align-left"><span id="text-body">Piṯḡāmā is an open source project and as such welcomes additional user contributions to our features. If you can code in Javascript and love data driven analysis of text please <a href="/contact">get in touch!</a></span></p>

              <p id="text-align-left"><span id="text-body">View our current features below and make sure to come back frequently to check out new additions as they arrrive.</span></p>
            </div>
          </div>

      <div className="features-display-container">

        <div className="feature-card">
          <div className="feature-card-header">Bruriah</div>
          <div className="feature-card-main">
            <a href="/features/bruriah"><i className="material-icons">assignment_ind</i></a>
            <div className="feature-main-description"><a href="/features/bruriah">Bruriah in the Talmud Bavli</a></div>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-card-header">Piṯḡāmā</div>
          <div className="feature-card-main">
            <a href="/pitgama"><i className="material-icons">info</i></a>
            <div className="feature-main-description"><a href="/pitgama">Where does the word come from?</a></div>
          </div>
        </div>

      </div>
    </div>




    </div>
    );
  }
}

export default Features;
