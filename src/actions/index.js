export const types = {
    LOGIN_USER: 'LOGIN_USER',
    LOGOUT_USER: 'LOGOUT_USER'
};

export function loginUser(email) {
    return { type: types.LOGIN_USER, email };
}

export function logoutUser() {
    return { type: types.LOGOUT_USER };
}