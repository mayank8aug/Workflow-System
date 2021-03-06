import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { growlUpdate, clearWorkflowError } from '../../actions/index';
import WorkflowsListHeader from './WorkflowsListHeader';
import WorkflowList from './WorklowList';
import { useHistory } from 'react-router-dom';

function updateGrowl(dispatch, type) {
    if (type === 'update-error') {
        dispatch(growlUpdate({ type: 'error', message: 'This workflow can not be updated as all the tasks are not done.', timeout: 4000 }));
    } else if (type === 'delete-success') {
        dispatch(growlUpdate({ type: 'success', message: 'The workflow has been deleted successfully.', timeout: 3000 }))
    }
    dispatch(clearWorkflowError());
}

function Workflows() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const history = useHistory();
    if (!isLoggedIn) {
        history.push('/');
    }
    const dispatch = useDispatch();
    const updateGrowlFn = useCallback(updateGrowl.bind(null, dispatch), []);
    const workflowState = useSelector(state => state.workflow);
    const { persistedWorkflows, updateStateErr, workflowRemoved, workflowAdded, searchQuery, filterState } = workflowState;
    useEffect(() => {
        if (updateStateErr) {
            updateGrowlFn('update-error');
        } else if (workflowRemoved) {
            updateGrowlFn('delete-success');
        } else if (workflowAdded) {
            // history.push(`/workflows/${persistedWorkflows.length - 1}`);
            dispatch(clearWorkflowError());
        }
    }, [workflowAdded, workflowRemoved, updateStateErr, updateGrowlFn, history, persistedWorkflows, dispatch]);
    const renderWorkflows = searchQuery || filterState ? persistedWorkflows.filter(workflow => workflow.name.toLowerCase().indexOf(searchQuery) > -1 && (filterState ? workflow.state === filterState : true)) : persistedWorkflows;
    return (
        <div>
            <WorkflowsListHeader />
            {renderWorkflows.length > 0 ? <WorkflowList workflows={renderWorkflows} /> : <span className="pd-l20">No Workflows...</span>}
        </div>
    );
}

export default Workflows;