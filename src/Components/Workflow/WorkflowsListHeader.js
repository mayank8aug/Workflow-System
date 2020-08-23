import React, { useCallback } from 'react';
import { addWorkflow } from '../../actions/index';
import { FaPlus } from "react-icons/fa";
import Search from './Search';
import { useDispatch } from 'react-redux';
import './WorkflowListHeader.css';

function createNewWorkflow(dispatch) {
    dispatch(addWorkflow());
}

function WorkflowsListHeader() {
    const dispatch = useDispatch();
    const createWorkflow = useCallback(createNewWorkflow.bind(null, dispatch), []);
    return (
        <div className="list-header">
            <Search />
            <button className="add-workflow display-flex align-items-center" onClick={createWorkflow}><FaPlus /><span className="pd-l4">Create Workflow</span></button>
        </div>
    );
}

export default WorkflowsListHeader;