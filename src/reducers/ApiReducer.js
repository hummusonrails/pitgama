let initialState = {
    results: [],
    addlresults: []
}

function ApiReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_RESULTS':
            return Object.assign({}, state, {
                results: action.data
              })
        case 'GET_MORE_RESULTS':
          return Object.assign({}, state, {
            addlresults: action.data
              })
        default:
            return state;
    }
}

export default ApiReducer;
