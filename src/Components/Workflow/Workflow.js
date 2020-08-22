import React from 'react';
import WorkflowHeader from './WorkflowHeader';
import { useSelector } from 'react-redux';
import NodesList from './NodesList';

function Workflow(props) {
    const { match } = props;
    const workflowIndex = Number(match.params.index);
    const workflows = useSelector(state => state.workflow.workflows);
    const workflow = workflows[workflowIndex];
    return (
        <div className="workflow">
            <WorkflowHeader workflow={workflow} index={workflowIndex} />
            <NodesList workflow={workflow} />
        </div>
    );
}

export default Workflow;