import React from 'react';

class TextCard extends React.Component {

  render() {
    return (
      <div>
        <div className="feature-box">
          <h1>{this.props.result.ref}</h1>
          <p>{this.props.result.he}</p>
        </div>
        <br />
      </div>
    );
  }
}

export default TextCard;
