import React, { useEffect, useCallback } from 'react';
import WorkflowHeader from './WorkflowHeader';
import { useSelector, useDispatch } from 'react-redux';
import { growlUpdate, clearWorkflowError } from '../../actions/index';
import NodesList from './NodesList';

function updateGrowl(dispatch, type) {
    if (type === 'update-error') {
        dispatch(growlUpdate({ type: 'error', message: 'This task can not be completed as the previous tasks are not done.', timeout: 5000 }));
    } else if (type === 'delete-success') {
        dispatch(growlUpdate({ type: 'success', message: 'The last task of this workflow has been deleted successfully.', timeout: 4000 }))
    }
    dispatch(clearWorkflowError());
}

function Workflow(props) {
    const { match } = props;
    const workflowIndex = Number(match.params.index);
    const dispatch = useDispatch();
    const updateGrowlFn = useCallback(updateGrowl.bind(null, dispatch), []);
    const workflowState = useSelector(state => state.workflow);
    const { workflows, updateStateErr, nodeRemoved } = workflowState;
    const workflow = workflows[workflowIndex];
    useEffect(() => {
        if (updateStateErr) {
            updateGrowlFn('update-error');
        } else if (nodeRemoved) {
            updateGrowlFn('delete-success');
        }
    }, [nodeRemoved, updateStateErr, updateGrowlFn]);
    return (
        <div className="workflow">
            <WorkflowHeader workflow={workflow} index={workflowIndex} />
            <NodesList workflow={workflow} workflowIndex={workflowIndex} />
        </div>
    );
}

export default Workflow;