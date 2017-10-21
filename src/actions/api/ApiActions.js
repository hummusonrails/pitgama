export function pitgamaSearch() {
    return (dispatch => {
        fetch(`https://jsonp.herokuapp.com/?url=http://www.sefaria.org/api/texts/Sanhedrin.38b?commentary=0&pad=0`)
          .then(data => data.json())
          .then(data => dispatch({ type: 'GET_RESULTS', data: data }))
    })
}
