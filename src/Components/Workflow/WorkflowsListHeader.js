import React, { useCallback } from 'react';
import { addWorkflow } from '../../actions/index';
import Search from './Search';
import { useDispatch } from 'react-redux';

function createNewWorkflow(dispatch) {
    dispatch(addWorkflow());
}

function WorkflowsListHeader() {
    const dispatch = useDispatch();
    const createWorkflow = useCallback(createNewWorkflow.bind(null, dispatch), []);
    return (
        <div>
            <Search />
            <button onClick={createWorkflow}>Create Workflow</button>
        </div>
    );
}

export default WorkflowsListHeader;