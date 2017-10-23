import React from 'react';

class TextCard extends React.Component {

  render() {
    if (this.props.result.he !== undefined && this.props.result.he.length > 0) {
      for (var i = 0; i < this.props.result.length; i++) {
        console.log(this.props.result.length)
        return (
          <div className="feature-display-container">
            <div className="feature-box">
              <h1>{this.props.result.ref}</h1>
              <p>{this.props.result.he}</p>
            </div>
            <br />
          </div>
        );
      }
    } else {
      return (
        <div className="feature-display-container">
          <div className="feature-box">
            <h1>{this.props.result.ref}</h1>
            <p>{this.props.result.he}</p>
          </div>
        <br />
      </div>
      );
    }
  }
}

export default TextCard;
