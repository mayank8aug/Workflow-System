import React, { useCallback } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import './WorkflowNode.css';
import { useDispatch } from 'react-redux';
import { updateState, updateNode } from '../../actions/index';
import { noop } from '../../utils';

function changeState(dispatch, workflowIndex, nodeIndex) {
    dispatch(updateState(workflowIndex, nodeIndex));
}

function updateNodeData(dispatch, workflowIndex, nodeIndex, ev) {
    const el = ev.target;
    const type = el.dataset.key;
    const data = {};
    data[type] = el.textContent;
    dispatch(updateNode(workflowIndex, nodeIndex, data));
}

function WorkflowNode(props) {
    const { workflowIndex, nodeIndex, node: { title, content, state } } = props;
    const dispatch = useDispatch();
    const changeStateFn = useCallback(changeState.bind(null, dispatch, workflowIndex, nodeIndex), [dispatch, nodeIndex, workflowIndex]);
    const updateNodeFn = useCallback(ev => updateNodeData(dispatch, workflowIndex, nodeIndex, ev), [dispatch, nodeIndex, workflowIndex]);
    return (
        <div className="workflow-node">
            <div className={`node-state-icon ${state.toLowerCase()}${state !== 'COMPLETED' ? ' cursor-pointer' : ''}`} onClick={state !== 'COMPLETED' ? changeStateFn : noop}><FaCheckCircle /></div>
            <div className="title" data-key="title" contentEditable onBlur={updateNodeFn}>{title}</div>
            <div className="content" data-key="content" contentEditable onBlur={updateNodeFn}>{content}</div>
        </div>
    ); 
}

export default WorkflowNode;