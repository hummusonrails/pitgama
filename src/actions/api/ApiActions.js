import fetchJsonp from 'fetch-jsonp';

export function pitgamaSearch() {
    return (dispatch => {
        fetchJsonp(`https://www.sefaria.org/api/texts/Aramaic_Targum_to_Song_of_Songs.2.5?commentary=0&context=0`)
          .then(data => data.json())
          .then(data => dispatch({ type: 'GET_RESULTS', data: data }))
    })
}
