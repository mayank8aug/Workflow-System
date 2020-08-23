import React from 'react';
import WorkflowNode from './WorkflowNode';
import './NodesList.css';

function NodesList(props) {
    const { workflowIndex, workflow: { nodes } } = props;
    return (
        <div className="nodes-list display-flex">
            {
                nodes.map((node, index) => {
                    return (
                        <WorkflowNode key={index} node={node} workflowIndex={workflowIndex} nodeIndex={index} />
                    );
                })
            }
        </div>
    );
}

export default NodesList;