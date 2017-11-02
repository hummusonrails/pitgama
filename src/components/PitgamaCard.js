import React from 'react';
import returnWord from '../logic/returnWord';

class TextCard extends React.Component {

  render() {

    let filteredHebrew, strippedEnglish

    this.props.result.he ?
      filteredHebrew = returnWord(this.props.result.he, "פִּתְגָמֵי") :
      filteredHebrew = "Loading..."

    this.props.result.text ?
      strippedEnglish = this.props.result.text.toString().replace(/<\/?[^>]+>/gi, '') :
      strippedEnglish = "Loading..." 

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
