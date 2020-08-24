import React, { useCallback } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { FaArrowCircleLeft } from 'react-icons/fa';
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
    const isBack = history.location.pathname.indexOf('workflows/') > -1;
    return (
        <div className="header">
            <div className="fs20 fw700 color-white display-flex align-items-center">
                {isBack && <span className="back-btn" onClick={history.goBack}><FaArrowCircleLeft /></span>}
                <span className="pd-l4">WORKFLOW SYSTEM</span>
            </div>
            {isLoggedIn && <button className="logout-btn" onClick={logout}>Logout</button>}
        </div>
    );
}

export default Header;