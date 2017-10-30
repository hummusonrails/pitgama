import React from 'react';
import { connect } from 'react-redux';
import { bruriahSearch, bruriahSearch2 } from '../../actions/api/ApiActions';
import {Doughnut} from 'react-chartjs-2';
import BruriahCard from '../BruriahCard';

class Bruriah extends React.Component {

  componentDidMount() {
    this.props.bruriahSearch();
    this.props.bruriahSearch2();
  }

  render() {

    let cards =
    console.log("opening renderTextCards")
    let resultsArray = [];
      if (this.props.results !== undefined && this.props.addlresults !== undefined) {
        resultsArray.push(this.props.results)
        resultsArray.push(this.props.addlresults)
        cards = resultsArray.map((result, i) =>
          <BruriahCard result={result} />)
      }
          else {
            cards = "Loading..."
          }

    const bruriahData = {
      labels: [
        "Eruvin",
        "Sanhedrin",
        ],
      datasets: [
          {
              data: [2, 1],

          }]
     };


    return (
      <div className="about-page">
        <div className="splash-container">
          <div className="intro-box">
            <h1 className="body-title">Bruriah</h1>
            <p className="body-intro">
              Where Does She Come Up In The Talmud Bavli?
            </p>
          </div>
        </div>
        <div className="feature-display-container">
          <div className="text-body">
            <p>Bruriah is one of several women quoted as a sage in the Talmud. She was the wife of the Tanna Rabbi Meir and the daughter of Rabbi Hananiah Ben Teradion, who is listed as one of the "Ten Martyrs." She is greatly admired for her breadth of knowledge in matters pertaining to both halachah and aggadah, and is said to have learned from the rabbis 300 halachot on a single cloudy day (Tractate Pesachim 62b). Her parents were put to death by the Romans for teaching Torah, but she carried on their legacy. - <a href="https://en.wikipedia.org/wiki/Bruriah">Wikipedia</a></p>
          </div>
        </div>
        <div className="feature-display-container">
          <div className="text-box">
            <Doughnut data={bruriahData}/>
          </div>
        </div>
        <div className="feature-display-container">
          {cards}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return ({
    results: state.results,
    addlresults: state.addlresults
  })
}

export default connect(mapStateToProps, { bruriahSearch, bruriahSearch2 })(Bruriah);
