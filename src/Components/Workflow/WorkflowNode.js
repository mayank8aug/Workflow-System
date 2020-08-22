import React from 'react';

function WorkflowNode(props) {
    const { node: { title, content, state } } = props;
    return (
        <div className="workflow-node">
            <div>{title}</div>
            <div>{content}</div>
            <div>{state}</div>
        </div>
    ); 
}

export default WorkflowNode;