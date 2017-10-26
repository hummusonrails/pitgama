import React from 'react';

class TextCard extends React.Component {

  render() {
    let strippedEnglish = '';
    if (this.props.result.text !== undefined) {
      strippedEnglish = this.props.result.text.toString().replace(/<\/?[^>]+>/gi, '')
    } else {
      strippedEnglish = "Loading..."
    }

        return (
          <div className="text-columns">
            <div className="text-box">
              <p>{this.props.result.he}</p>
            </div>
            <div className="text-box">
              <p id="text-body">{strippedEnglish}</p>
            </div>
            <br />
          </div>
        );
      }
}

export default TextCard;
