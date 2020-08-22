const initialState = {
    isLoggedIn: false,
    email: null
};

function auth(prevState = initialState, action) {
    switch(action.type) {
        case 'LOGIN_USER':
            return Object.assign({}, prevState, {
                isLoggedIn: true,
                email: action.email
            });
        case 'LOGOUT_USER':
            return Object.assign({}, prevState, {
                isLoggedIn: false,
                email: null
            });
        default:
            return prevState;
    }
}

export default auth;