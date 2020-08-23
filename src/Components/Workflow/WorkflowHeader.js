import React from 'react';
import WorkflowActions from './WorkflowActions';
import './WorkflowHeader.css';

function WorkflowHeader(props) {
    const { index, workflow: { name, nodes } } = props;
    const hideShuffle = !nodes.length || nodes.some(node => node.state !== 'COMPLETED');
    return (
        <div className="workflow-header">
            <input class="workflow-name-text" type="text" defaultValue={name} />
            <WorkflowActions index={index} nodesCount={nodes.length} hideShuffle={hideShuffle} />
        </div>
    );
}

export default WorkflowHeader;