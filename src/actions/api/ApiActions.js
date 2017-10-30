import fetchJsonp from 'fetch-jsonp';

export function pitgamaSearch() {
    return (dispatch => {
        fetchJsonp(`https://www.sefaria.org/api/texts/Aramaic_Targum_to_Song_of_Songs.2.5?commentary=0&context=0`)
          .then(data => data.json())
          .then(data => dispatch({ type: 'GET_RESULTS', data: data }))
    })
}

export function bruriahSearch() {
    return (dispatch => {
        fetchJsonp(`https://www.sefaria.org/api/texts/Eruvin.53b?commentary=0&context=0`)
          .then(data => data.json())
          .then(data => dispatch({ type: 'GET_RESULTS', data: data }))
    })
}

export function bruriahSearch2() {
    return (dispatch => {
        fetchJsonp(`https://www.sefaria.org/api/texts/Pesachim.62b?commentary=0&context=0`)
          .then(data => data.json())
          .then(data => dispatch({ type: 'GET_MORE_RESULTS', data: data }))
    })
}
