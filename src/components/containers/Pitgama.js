import React from 'react';
import { connect } from 'react-redux';
import { pitgamaSearch } from '../../actions/api/ApiActions';
import TextCard from '../TextCard';

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
        cards = resultsArray.map(result =>
          <TextCard result={result} />)
        }
          else {
            cards = "Loading..."
          }

    const renderTextCards = cards

    return (
      <div>
        <h1>What is Pitgama?</h1>
        {renderTextCards}
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
