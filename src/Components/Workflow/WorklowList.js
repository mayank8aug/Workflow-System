import React from 'react';
import WorkflowCard from './WorkflowCard';
import './WorkflowList.css';

function WorkflowList(props) {
    const { workflows } = props;
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