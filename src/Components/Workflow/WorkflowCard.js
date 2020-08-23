import React, { useCallback } from 'react';
import { useHistory } from "react-router-dom";
import { FaTrashAlt, FaCheckCircle } from "react-icons/fa";
import { deleteWorkflow, updateWorkflowState } from '../../actions/index';
import './WorkflowCard.css';
import { useDispatch } from 'react-redux';

function removeWorkflow(dispatch, index) {
    dispatch(deleteWorkflow(index));
}

function workflowStateUpdate(dispatch, index) {
    dispatch(updateWorkflowState(index));
}

function redirectToWorkflow(history, index) {
    history.push(`/workflows/${index}`);
}

function WorkflowCard(props) {
    const { workflow: { name, state }, index } = props;
    const history = useHistory();
    const dispatch = useDispatch();
    const removeWorkflowFn = useCallback(ev => { removeWorkflow(dispatch, index); ev.stopPropagation(); }, [dispatch, index]);
    const updateWorkflowStateFn = useCallback(ev => { workflowStateUpdate(dispatch, index); ev.stopPropagation(); }, [dispatch, index]);
    const editWorkflow = useCallback(redirectToWorkflow.bind(null, history, index), []);
    return (
        <div className="workflow-card" onClick={editWorkflow}>
            <div className="delete-icon" onClick={removeWorkflowFn}>
                <FaTrashAlt />
            </div>
            <div className="workflow-name">{name}</div> 
            <div className="display-flex justify-space-between align-item-center">
                {state}
                <span className={`state-icon ${state.toLowerCase()}`} onClick={updateWorkflowStateFn}><FaCheckCircle /></span>
            </div>    
        </div>
    );
}

export default WorkflowCard;