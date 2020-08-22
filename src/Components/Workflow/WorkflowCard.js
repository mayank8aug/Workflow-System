import React, { useCallback } from 'react';
import { FaTrashAlt, FaCheckCircle } from "react-icons/fa";
import { deleteWorkflow } from '../../actions/index';
import './WorkflowCard.css';
import { useDispatch } from 'react-redux';

function removeWorkflow(dispatch, index) {
    dispatch(deleteWorkflow(index));
}

function WorkflowCard(props) {
    const { workflow: { name, state }, index } = props;
    const dispatch = useDispatch();
    const removeWorkflowFn = useCallback(removeWorkflow.bind(null, dispatch, index), []);
    return (
        <div className="workflow-card">
            <div className="delete-icon" onClick={removeWorkflowFn}>
                <FaTrashAlt />
            </div>
            <div className="workflow-name">{name}</div> 
            <div className="display-flex justify-space-between align-item-center">
                {state}
                <span className={`state-icon ${state.toLowerCase()}`}><FaCheckCircle /></span>
            </div>    
        </div>
    );
}

export default WorkflowCard;