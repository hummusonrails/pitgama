import React from 'react';
import returnWordInArr from '../logic/returnWordInArr';

class BruriahCard extends React.Component {

  render() {

    let filteredHebrew;
    if (this.props.result.he !== undefined) {
      filteredHebrew = returnWordInArr(this.props.result.he, "ברוריה", "ברוריא");
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
        <div className="fix-height">
          <div className="texts-display-container">

            <div class="text-feature-card">
              <div class="feature-card-header">{this.props.result.ref}</div>
              <div class="feature-card-main">
                <div class="feature-main-description">{filteredHebrew}</div>
              </div>
            </div>

            <div class="text-feature-card">
              <div class="feature-card-header">{this.props.result.heSectionRef}</div>
              <div class="feature-card-main">
                <div class="feature-main-description">{strippedEnglish}</div>
              </div>
            </div>

          </div>
        </div>
        );
      }
}

export default BruriahCard;
