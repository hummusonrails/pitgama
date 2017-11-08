import fetchJsonp from 'fetch-jsonp';

export function textSearch(text) {
    return (dispatch => {
        fetchJsonp(`https://www.sefaria.org/api/texts/${text}?commentary=0&context=0`)
          .then(data => data.json())
          .then(data => dispatch({ type: 'GET_RESULTS', data: data }))
    })
}
