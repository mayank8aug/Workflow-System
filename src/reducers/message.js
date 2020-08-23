const initialState = {
    data: null
};

function message(prevState = initialState, action) {
    switch(action.type) {
        case 'UPDATE_GROWL':
            return Object.assign({}, prevState, {
                data: action.data
            });
        default:
            return prevState;
    }
}

export default message;