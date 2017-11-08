import React from 'react';
import { connect } from 'react-redux';
import { bruriahSearch, bruriahSearch2, bruriahSearch3, bruriahSearch4 } from '../../actions/api/ApiActions';
import {Doughnut} from 'react-chartjs-2';
import BruriahCard from '../BruriahCard';

class Bruriah extends React.Component {

  componentDidMount() {
    this.props.bruriahSearch("Eruvin.53b");
    this.props.bruriahSearch("Pesachim.62b");
    this.props.bruriahSearch("Berakhot.10a");
    this.props.bruriahSearch("Avodah_Zarah.18b");
  }

  render() {

    let cards, resultsArray;

      // if (!!this.props.results && !!this.props.addlresults && !!this.props.thirdresults && !!this.props.fourthresults) {
      if (!!this.props.results) {

        resultsArray = [this.props.results]
        // resultsArray = [this.props.results, this.props.addlresults, this.props.thirdresults, this.props.fourthresults ]

        cards = resultsArray.map((result, i) =>
          <BruriahCard result={result} key={i} />)
      }
          else {
            cards = "Loading..."
          }

    const bruriahData = {
      labels: [
        "Eruvin",
        "Sanhedrin",
        "Berakhot",
        "Avodah Zarah"
        ],
      datasets: [{
              data: [1, 1, 1, 1],
              backgroundColor: [
                'rgba(171, 180, 0, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(0, 10, 180, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ]
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
    results: state.results
    // addlresults: state.addlresults,
    // thirdresults: state.thirdresults,
    // fourthresults: state.fourthresults
  })
}

export default connect(mapStateToProps, { bruriahSearch })(Bruriah);

// export default connect(mapStateToProps, { bruriahSearch, bruriahSearch2, bruriahSearch3, bruriahSearch4 })(Bruriah);
