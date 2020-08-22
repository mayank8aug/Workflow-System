import React, { useCallback } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../actions/index';
import './Header.css'

function userLogout(dispatch, history) {
    dispatch(logoutUser());
    history.replace('/');
}

function Header() {
    const history = useHistory();;
    const dispatch = useDispatch();
    const logout = useCallback(userLogout.bind(null, dispatch, history));
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    return (
        <div className="header">
            <div className="fs20 fw700 color-white">FLOWAPP</div>
            {isLoggedIn && <button className="logout-btn" onClick={logout}>Logout</button>}
        </div>
    );
}

export default Header;