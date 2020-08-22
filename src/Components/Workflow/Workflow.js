import React from 'react';
import WorkflowHeader from './WorkflowHeader';
import { useSelector } from 'react-redux';

function Workflow(props) {
    const { match } = props;
    const workflowIndex = match.params.index;
    const workflows = useSelector(state => state.workflow.workflows);
    const workflow = workflows[workflowIndex];
    const { name } = workflow;
    return (
        <div className="workflow">
            <WorkflowHeader name={name} />
        </div>
    );
}

export default Workflow;