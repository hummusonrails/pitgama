
export function pitgamaSearch() {
    return (dispatch => {
        fetch(`https://jsonp.herokuapp.com?url=http://www.sefaria.org/api/texts/Sanhedrin?pad=0&commentary=0`)
          .then(data => data.json())
          .then(data => dispatch({ type: 'GET_RESULTS', data: data }))
    })
}
