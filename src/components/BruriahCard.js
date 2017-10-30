import React from 'react';
import returnWordInArr from '../logic/returnWordInArr';

class BruriahCard extends React.Component {

  render() {

    let filteredHebrew;
    if (this.props.result.he !== undefined) {
      filteredHebrew = returnWordInArr(this.props.result.he, "ברוריה");
    } else {
      filteredHebrew = "Loading..."
    }

    let filteredEnglish;
    if (this.props.result.text !== undefined) {
      filteredEnglish = returnWordInArr(this.props.result.text, "Berurya");
    } else {
      filteredEnglish = "Loading..."
    }

    let strippedEnglish = '';
    if (filteredEnglish !== undefined) {
      strippedEnglish = filteredEnglish.toString().replace(/<\/?[^>]+>/gi, '')
      console.log(strippedEnglish)
    } else {
      strippedEnglish = "Loading..."
    }

        return (
          <div className="text-columns">
            <div className="text-box">
              <p id="hebrew-textbody">{this.props.result.heSectionRef}</p>
              <p id="hebrew-textbody">{filteredHebrew}</p>
            </div>
            <div className="text-box">
              <p id="english-textbody">{this.props.result.title}</p>
              <p id="english-textbody">{strippedEnglish}</p>
            </div>
            <br />
          </div>
        );
      }
}

export default BruriahCard;
