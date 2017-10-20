import React from 'react';

class TextCard extends React.Component {

  render() {
    return (
      <div>
        <div className="feature-box">
        <h1>DO YOU SEE ME?</h1>
          <h3>{this.props.result.ref}</h3>
          <p>{this.props.result.he}</p>
        </div>
        <br />
      </div>
    );
  }
}

export default TextCard;
