import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addNode } from '../../actions/index';

function addNewNode(dispatch, index) {
    dispatch(addNode(index))
}

function WorkflowActions(props) {
    const { index } = props;
    const dispatch = useDispatch();
    const addNodeFn = useCallback(addNewNode.bind(null, dispatch, index), []);
    return (
        <div className="workflow-actions">
            <button className="add-node" onClick={addNodeFn}>Add Node</button>
        </div>
    );
}

export default WorkflowActions;