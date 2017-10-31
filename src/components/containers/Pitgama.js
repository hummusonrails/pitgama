import React from 'react';
import { connect } from 'react-redux';
import { pitgamaSearch } from '../../actions/api/ApiActions';
import PitgamaCard from '../PitgamaCard';

class Pitgama extends React.Component {

  componentDidMount() {
    this.props.pitgamaSearch();
  }

  render() {

    let cards =
    console.log("opening renderTextCards")
    let resultsArray = [];
      if (this.props.results !== undefined) {
        resultsArray.push(this.props.results)
        cards = resultsArray.map((result, i) =>
          <PitgamaCard result={result} />)
      }
          else {
            cards = "Loading..."
          }

    return (
      <div className="about-page">
        <div className="splash-container">
          <div className="intro-box">
            <h1 className="body-title">{this.props.results.ref}</h1>
            <p className="body-intro">
              A Look Inside
            </p>
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
  })
}

export default connect(mapStateToProps, { pitgamaSearch })(Pitgama);
