import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { FaPlus, FaTimes, FaRandom } from "react-icons/fa";
import { addNode, deleteNode, updateWorkflows } from '../../actions/index';

function addNewNode(dispatch, index) {
    dispatch(addNode(index))
}

function deleteLastNode(dispatch, index) {
    dispatch(deleteNode(index));
}

function saveWorkflow(dispatch) {
    dispatch(updateWorkflows());
}

function WorkflowActions(props) {
    const { index, nodesCount, allowShuffle } = props;
    const dispatch = useDispatch();
    const addNodeFn = useCallback(addNewNode.bind(null, dispatch, index), []);
    const deleteNodeFn = useCallback(deleteLastNode.bind(null, dispatch, index), []);
    const saveWorkflowFn = useCallback(saveWorkflow.bind(null, dispatch), [dispatch]);
    return (
        <div className="workflow-actions display-flex align-items-center">
            {allowShuffle && <button className="shuffle display-flex align-items-center" onClick={() => {}}><FaRandom /><span className="pd-l4">Shuffle</span></button>}
            {nodesCount > 0 && <button className="delete-node display-flex align-items-center" onClick={deleteNodeFn}><FaTimes /><span className="pd-l4">Delete</span></button>}
            <button className="add-node display-flex align-items-center" onClick={addNodeFn}><FaPlus /><span className="pd-l4">Add Node</span></button>
            <button className="save display-flex align-items-center" onClick={saveWorkflowFn}><span className="pd-l4">Save</span></button>
        </div>
    );
}

export default WorkflowActions;