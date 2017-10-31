let initialState = {
    results: [],
    addlresults: [],
    thirdresults: [],
    fourthresults: []
}

function ApiReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_RESULTS':
            return Object.assign({}, state, {
                results: action.data
              })
        case 'SECOND_TEXT':
          return Object.assign({}, state, {
            addlresults: action.data
              })
        case 'THIRD_TEXT':
          return Object.assign({}, state, {
            thirdresults: action.data
              })
        case 'FOURTH_TEXT':
          return Object.assign({}, state, {
            fourthresults: action.data
              })
        default:
            return state;
    }
}

export default ApiReducer;
