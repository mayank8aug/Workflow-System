import React from 'react';

function WorkflowHeader(props) {
    const { name } = props;
    return (
        <div className="workflow-header">
            <div className="workflow-name">
                <input type="text" defaultValue={name} />
            </div>
        </div>
    );
}

export default WorkflowHeader;