import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { growlUpdate, clearWorkflowError } from '../../actions/index';
import WorkflowsListHeader from './WorkflowsListHeader';
import WorkflowList from './WorklowList';

function updateGrowl(dispatch, type) {
    if (type === 'update-error') {
        dispatch(growlUpdate({ type: 'error', message: 'This workflow can not be updated as all the tasks are not done.', timeout: 4000 }));
    } else if (type === 'delete-success') {
        dispatch(growlUpdate({ type: 'success', message: 'The workflow has been deleted successfully.', timeout: 3000 }))
    }
    dispatch(clearWorkflowError());
}

function Workflows() {
    const dispatch = useDispatch();
    const updateGrowlFn = useCallback(updateGrowl.bind(null, dispatch), []);
    const workflowState = useSelector(state => state.workflow);
    const { updateStateErr, workflowRemoved } = workflowState;
    useEffect(() => {
        if (updateStateErr) {
            updateGrowlFn('update-error');
        } else if (workflowRemoved) {
            updateGrowlFn('delete-success');
        }
    }, [workflowRemoved, updateStateErr, updateGrowlFn]);
    return (
        <div>
            <WorkflowsListHeader />
            <WorkflowList />
        </div>
    );
}

export default Workflows;