import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { growlUpdate } from '../../actions/index';
import './Growl.css';

function updateGrowl(dispatch) {
    dispatch(growlUpdate(null));
}

function Growl() {
    const growlData = useSelector(state => state.message.data);
    const { message, type, timeout } = growlData || {};
    const dispatch = useDispatch();
    const updateGrowlFn = useCallback(updateGrowl.bind(null, dispatch), []);
    useEffect(() => {
        setTimeout(updateGrowlFn, timeout);
    }, [updateGrowlFn, timeout]);
    if (message) {
        return (
            <div className={`growl growl-${type}`}>
                {message}
            </div>
        );
    } else {
        return null;
    }
}

export default Growl;