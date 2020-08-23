import React, { useCallback } from 'react';
import { FaFilter } from 'react-icons/fa';
import { setFilter } from '../../actions/index';
import { useDispatch } from 'react-redux';

function filterWorkflows(dispatch, state) {
    dispatch(setFilter(state));
}

function Filter() {
    const dispatch = useDispatch();
    const filterWorkflowsFn = useCallback(ev => filterWorkflows(dispatch, ev.target.value), [dispatch]);
    return (
        <div className="filters pos-rel">
            <FaFilter />
            <select onChange={filterWorkflowsFn}>
                <option value="">ALL</option>
                <option value="PENDING">PENDING</option>
                <option value="COMPLETED">COMPLETED</option>
            </select>
        </div>
    );
}

export default Filter;