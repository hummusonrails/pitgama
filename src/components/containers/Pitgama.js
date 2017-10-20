import React from 'react';
import { connect } from 'react-redux';
import { pitgamaSearch } from '../../actions/api/ApiActions';

class Pitgama extends React.Component {

  componentDidMount() {
    alert("i'm here")
    this.props.pitgamaSearch();
  }

  render() {

    const SearchText = function() {
      let reducedResults = [];
      this.props.results ?
        this.props.results.map(result => {
          if (result.match("פִּתְגָמָא")) {
            reducedResults.push(result)
            console.log(reducedResults)
          }
        }) : "Loading..."
      }
    return (
      <div>
        <h1>What is Pitgama?</h1>
        <SearchText />
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
