import React from 'react';
import returnWordInArr from '../logic/returnWordInArr';

class BruriahCard extends React.Component {

  render() {

    let filteredHebrew, filteredEnglish, strippedEnglish;
    
    this.props.result.he ?
              filteredHebrew = returnWordInArr(this.props.result.he, "ברוריה", "ברוריא") :
              filteredHebrew = "Loading..."

    this.props.result.text ?
              filteredEnglish = returnWordInArr(this.props.result.text, "Berurya") :
              filteredEnglish = "Loading..."

    filteredEnglish ?
              strippedEnglish = filteredEnglish.toString().replace(/<\/?[^>]+>/gi, '') :
              strippedEnglish = "Loading..."

        return (
        <div className="fix-height">
          <div className="texts-display-container">

            <div className="text-feature-card">
              <div className="feature-card-header"><a href={'https://www.sefaria.org/' + this.props.result.ref} target="_blank">{this.props.result.heSectionRef}</a></div>
              <div className="feature-card-main">
                <div className="feature-main-description">{filteredHebrew}</div>
              </div>
            </div>

            <div className="text-feature-card">
              <div className="feature-card-header"><a href={'https://www.sefaria.org/' + this.props.result.heSectionRef} target="_blank">{this.props.result.ref}</a></div>
              <div className="feature-card-main">
                <div className="feature-main-description">{strippedEnglish}</div>
              </div>
            </div>

          </div>
        </div>
        );
      }
}

export default BruriahCard;
