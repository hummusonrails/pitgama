import React from 'react';
import returnWord from '../logic/returnWord';

class TextCard extends React.Component {

  render() {

    let filteredHebrew;
    if (this.props.result.he !== undefined) {
      filteredHebrew = returnWord(this.props.result.he, "פִּתְגָמֵי");
      console.log(this.props.result.he)
      console.log(filteredHebrew)
    } else {
      filteredHebrew = "Loading..."
    }

    let strippedEnglish = '';
    if (this.props.result.text !== undefined) {
      strippedEnglish = this.props.result.text.toString().replace(/<\/?[^>]+>/gi, '')
    } else {
      strippedEnglish = "Loading..."
    }

        return (
          <div className="text-columns">
            <div className="text-box">
              <p id="hebrew-textbody">{filteredHebrew}</p>
            </div>
            <div className="text-box">
              <p id="english-textbody">{strippedEnglish}</p>
            </div>
            <br />
          </div>
        );
      }
}

export default TextCard;
