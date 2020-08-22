import React from 'react';
import { useSelector } from 'react-redux';
import WorkflowCard from './WorkflowCard';
import './WorkflowList.css';

function WorkflowList() {
    const workflows = useSelector(state => state.workflow.workflows);
    return (
        <div className="workflow-list">
            {
                workflows.map((workflow, index) => {
                    return (
                        <WorkflowCard key={index} workflow={workflow} index={index} />
                    );
                })
            }
        </div>
    )
}

export default WorkflowList;