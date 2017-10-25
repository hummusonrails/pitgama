import fetchJsonp from 'fetch-jsonp';

export function pitgamaSearch() {
    return (dispatch => {
        fetchJsonp(`http://www.sefaria.org/api/texts/Sanhedrin.38b?pad=0&commentary=0`)
          .then(data => data.json())
          .then(data => dispatch({ type: 'GET_RESULTS', data: data }))
    })
}
