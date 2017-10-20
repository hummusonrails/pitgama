import React from 'react';
import { connect } from 'react-redux';
import { pitgamaSearch } from '../../actions/api/ApiActions';
import TextCard from '../TextCard';

class Pitgama extends React.Component {

  componentDidMount() {
    this.props.pitgamaSearch();
  }

  render() {

    const renderTextCards =
    console.log("opening renderTextCards")
    let resultsArray = [];
      if (this.props.results !== undefined) {
        resultsArray.push(this.props.results)
        console.log(resultsArray[0])
        resultsArray.map(result =>
          <TextCard result={result} />) }
          else {
            "Loading..."
          }

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
