import React from 'react';
import WorkflowNode from './WorkflowNode';

function NodesList(props) {
    const { workflow: { nodes } } = props;
    return (
        <div className="nodes-list">
            {
                nodes.map((node, index) => {
                    return (
                        <WorkflowNode key={index} node={node} />
                    );
                })
            }
        </div>
    );
}

export default NodesList;