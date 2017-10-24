import React from 'react';

class About extends React.Component {

  render() {

    return (
      <div>
        <div className="splash-container">
          <div className="intro-box">
            <h1 className="body-title">What is Piṯḡāmā?</h1>
            <p className="body-intro">
              Just A Word...
            </p>
          </div>
        </div>
        <div className="feature-display-container">
          <div className="feature-about-box">
            <p id="text-align-left"><span id="opening-sentence">Piṯḡāmā begins with a word, <i>actually many words</i>.</span></p>

            <p id="text-align-left"><span id="text-body">Jewish tradition is a text based tradition. The timeless legacy of Jewish faith and civilization is not a building or a piece of art but rather words; many, many words. These words span the course of thousands of years and were given life in cultures across the globe. Each text was never meant to live in isolation from the other. Each work was not meant to be its own island. Rather, the words and texts interact with each other. Comparing. Contrasing. Arguing. Affirming. Challenging. In fact, for the past hundreds of years, the most studied colletion of rabbinic texts, the Babylonian Talmud has been printed like a hardcopy interlinked website.</span></p>

            <p id="text-align-left"><span id="text-body">Piṯḡāmā is an attempt to continue that tradition of deepening the connections between texts to gain insight using modern technology. The word Piṯḡāmā itself is Aramaic and means a word or a phrase. It is related to the Persian word <i>patgam</i>, which can eloquently be translated as <i>"that which has arrived"</i>.</span></p>

            <p id="text-align-left"><span id="text-body">We hope the arrival of Piṯḡāmā will enhance your Jewish text learning through data driven analysis.</span></p>
          </div>
        </div>
        <div className="feature-display-container">
          <div className="feature-about-box">
            <div className="feature-container">
              <div id="feature-text-area">
              <p id="text-align-left"><span id="opening-sentence">Relational Text</span></p>

                <p id="text-align-left"><span id="text-body">In 1523 a publisher named Daniel Bomberg printed the first modern edition of the Babylonian Talmud in Venice. This version would come to completely disrupt Jewish learning forever. There were earlier attempts to present each page of the Talmud with a clear layout and some corresponding commentary, but only Bomberg no one had achieved such clear consistency. (The corresponding development of the modern printing press was a big help as well!)</span></p>

                <p id="text-align-left"><span id="text-body">Each Talmud page in the Bomberg edition contains running commentaries that transcend time and place. The act of putting them together on the same page creates a "living conversation" between actors through the centuries, that you as a the contemporary reader, get to participate in as well. This was revolutionary in so many ways. Perhaps it was the first World Wide Web...</span></p>
              </div>

            <div id="feature-image-area">
              <div id="paired-image-interconnected"></div>
            </div>
          </div>
        </div>

          <div className="feature-about-box">
          <div className="feature-container">
            <div id="feature-text-area">
            <p id="text-align-left"><span id="opening-sentence">What Will You Find</span></p>


              <p id="text-align-left"><span id="text-body">This site is continuously evolving. There is no end goal for this project, but rather it is a continued exploration in Jewish text using data driven analysis. We are <a href="/contact">three people</a> who are doing this as a labor of love in addition to our work and family responsibilities. If you have the interest and the ability we hope you will join us in contributing to the project. Do you have a background in coding? Check out the code for Piṯḡāmā on <a href="https://github.com/benhayehudi/pitgama">Github</a>, it is all open source, and submit a contribution with a well documented pull request. Do you also have an interest in creating an algorithm to analyze some element of text? Please let us know! Our code is written in Javascript and we would welcome a feature contribution. Our texts come from the generosity of Sefaria and their open API. You can check out their <a href="https://github.com/Sefaria/Sefaria-Project/wiki/API-Documentation">API documentation as well</a>.</span></p>

              <p id="text-align-left"><span id="text-body">As new features are created they will be added to a Features section on Piṯḡāmā. We invite you to come back regularly to check out the latest additions.</span></p>
            </div>


        </div>
      </div>
    </div>
  </div>
    );
  }
}

export default About;
