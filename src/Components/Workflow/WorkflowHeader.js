import React from 'react';
import WorkflowActions from './WorkflowActions';
import './WorkflowHeader.css';

function WorkflowHeader(props) {
    const { index, workflow: { name, nodes, state } } = props;
    const allowShuffle = state === 'COMPLETED';
    return (
        <div className="workflow-header">
            <input class="workflow-name-text" type="text" defaultValue={name} />
            <WorkflowActions index={index} nodesCount={nodes.length} allowShuffle={allowShuffle} />
        </div>
    );
}

export default WorkflowHeader;