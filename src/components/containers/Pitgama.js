import React from 'react';
import { connect } from 'react-redux';
import { pitgamaSearch } from '../../actions/api/ApiActions';
import PitgamaCard from '../PitgamaCard';

class Pitgama extends React.Component {

  componentDidMount() {
    this.props.pitgamaSearch();
  }

  render() {

    let cards = "Loading..."
      if (this.props.results) {
        let resultsArray = [this.props.results]
        cards = resultsArray.map((result, i) =>
          <PitgamaCard result={result} key={i} />)
      }

    return (
      <div className="about-page">
        <div className="splash-container">
          <div className="intro-box">
            <h1 className="body-title">Piṯḡāmā</h1>
            <p className="body-intro">
              One Textual Source
            </p>
          </div>
        </div>

        <div className="fix-height">
          <div className="feature-display-container">
            <div className="feature-box">
              <p id="text-align-left"><span id="opening-sentence">Where does this word come from?</span></p>

              <p id="text-align-left"><span id="text-body">Piṯḡāmā is an interesting word. It only appears a limited number of times throughout Jewish texts, both in Tanakh and in rabbinic literature. One such example is this text from the Targum to the Song of Songs 2:5. What do you make of this text?</span></p>
            </div>
          </div>

        <div className="feature-display-container">
          {cards}
        </div>
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
