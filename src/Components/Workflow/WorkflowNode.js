import React, { useCallback } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import './WorkflowNode.css';
import { useDispatch } from 'react-redux';
import { updateState } from '../../actions/index';
import { noop } from '../../utils';

function changeState(dispatch, workflowIndex, nodeIndex) {
    dispatch(updateState(workflowIndex, nodeIndex));
}

function WorkflowNode(props) {
    const { workflowIndex, nodeIndex, node: { title, content, state } } = props;
    const dispatch = useDispatch();
    const changeStateFn = useCallback(changeState.bind(null, dispatch, workflowIndex, nodeIndex));
    return (
        <div className="workflow-node">
            <div className={`node-state-icon ${state.toLowerCase()}${state !== 'COMPLETED' ? ' cursor-pointer' : ''}`} onClick={state !== 'COMPLETED' ? changeStateFn : noop}><FaCheckCircle /></div>
            <div className="title">{title}</div>
            <div className="content">{content}</div>
        </div>
    ); 
}

export default WorkflowNode;