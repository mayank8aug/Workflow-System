const initialState = {
    filterState: null,
    searchQuery: null
};

function workflowHeader(prevState = initialState, action) {
    switch(action.type) {
        case 'SET_SEARCH_QUERY':
            return Object.assign({}, prevState, {
                searchQuery: action.query
            });
        case 'SET_FILTER':
            return Object.assign({}, prevState, {
                filterState: action.filterState
            });
        default:
            return prevState;
    }
}

export default workflowHeader;