import React, { useCallback } from 'react';
import WorkflowActions from './WorkflowActions';
import { updateWorkflow } from '../../actions/index';
import './WorkflowHeader.css';
import { useDispatch } from 'react-redux';

function updateWfName(dispatch, index, name) {
    dispatch(updateWorkflow(index, { name }));
}

function WorkflowHeader(props) {
    const { index, workflow: { name, nodes, state } } = props;
    const allowShuffle = state === 'COMPLETED' && nodes.length > 1;
    const dispatch = useDispatch();
    const updateWfNameFn = useCallback(ev => { updateWfName(dispatch, index, ev.target.value); }, [dispatch, index]);
    return (
        <div className="workflow-header">
            <input className="workflow-name-text" type="text" defaultValue={name} onBlur={updateWfNameFn} />
            <WorkflowActions index={index} nodesCount={nodes.length} allowShuffle={allowShuffle} />
        </div>
    );
}

export default WorkflowHeader;