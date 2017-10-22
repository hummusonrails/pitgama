var myHeaders = new Headers({
  'Content-Type': 'text/json',
  'Origin': 'https://pitgama.herokuapp.com'
});

export function pitgamaSearch() {
    return (dispatch => {
        fetch(`https://crossorigin.me/https://www.sefaria.org/api/texts/Sanhedrin?pad=0`, {
          headers: myHeaders
          })
          .then(data => data.json())
          .then(data => dispatch({ type: 'GET_RESULTS', data: data }))
    })
}
