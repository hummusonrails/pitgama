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
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetch(proxyURL + 'https://www.sefaria.org/api/texts/Sanhedrin?commentary=0&pad=0')
      .then(response => response.json())
      .then(data => this.setState({ english: data.text, hebrew: data.he }))
      .catch(console.log("Can’t access " + url + " response. Blocked by browser?"))
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
