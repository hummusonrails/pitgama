import React from 'react';

class TextCard extends React.Component {

  render() {
    return (
  <div className="feature-display-container">
    <div className="feature-box" >
      <h3>HELLO</h3>
      <p>{this.props.result.he}</p>
    </div>
    <br />
  </div>
    );
  }
}

export default TextCard;
