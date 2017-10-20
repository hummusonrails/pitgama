import React from 'react';

class Pitgama extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      english: [],
      hebrew: []
    }
  }

  componentDidMount() {
    var myInit = { method: 'GET' };
    fetch('https://www.sefaria.org/api/texts/Sanhedrin?commentary=0&pad=0', myInit)
      .then(response => response.json())
      .then(data => this.setState({ english: data.text, hebrew: data.he }))
  }

  render() {

    return (
      <div>
      <p>
        {this.state.english}
      </p>
      </div>
    );
  }
}

export default Pitgama;
