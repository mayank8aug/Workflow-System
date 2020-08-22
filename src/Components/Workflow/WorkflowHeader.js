import React from 'react';
import WorkflowActions from './WorkflowActions';

function WorkflowHeader(props) {
    const { index, workflow: { name } } = props;
    return (
        <div className="workflow-header">
            <div className="workflow-name">
                <input type="text" defaultValue={name} />
            </div>
            <WorkflowActions index={index} />
        </div>
    );
}

export default WorkflowHeader;