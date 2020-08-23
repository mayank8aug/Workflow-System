const initialState = {
    workflows: [],
    updateStateErr: false,
    nodeRemoved: false,
    workflowRemoved: false
};

function workflow(prevState = initialState, action) {
    switch(action.type) {
        case 'ADD_WORKFLOW':
            return Object.assign({}, prevState, {
                workflows: prevState.workflows.concat(action.workflow),
                updateStateErr: false,
                workflowAdded: true
            });
        case 'DELETE_WORKFLOW':
            prevState.workflows.splice(action.index, 1);
            return Object.assign({}, prevState, {
                workflows: [...prevState.workflows],
                updateStateErr: false,
                workflowRemoved: true
            });
        case 'UPDATE_WORKFLOW_STATE':
            const workflows = JSON.parse(JSON.stringify(prevState.workflows));
            const workflow = workflows[action.index];
            const canNotBeUpdated = workflow.nodes.some(node => node.state !== 'COMPLETED');
            if (canNotBeUpdated) {
                return Object.assign({}, prevState, {
                    updateStateErr: true
                });
            } else {
                workflow.state = workflow.state === 'PENDING' ? 'COMPLETED' : 'PENDING';
                return Object.assign({}, prevState, {
                    workflows
                });
            }
        case 'ADD_NODE':
            const prevWorkflows = JSON.parse(JSON.stringify(prevState.workflows));
            prevWorkflows[action.index].nodes.push(action.node);
            return Object.assign({}, prevState, {
                workflows: prevWorkflows,
                updateStateErr: false
            });
        case 'DELETE_NODE':
            const allWorkflows = JSON.parse(JSON.stringify(prevState.workflows));
            const allNodes = allWorkflows[action.index].nodes;
            allNodes.pop();
            return Object.assign({}, prevState, {
                nodeRemoved: true,
                workflows: allWorkflows
            });  
        case 'UPDATE_NODE_STATE':
            const allPrevWorkflows = JSON.parse(JSON.stringify(prevState.workflows));
            const allNodeList = allPrevWorkflows[action.workflowIndex].nodes;
            const node = allNodeList[action.nodeIndex];
            let incompleteNode = false;
            for (let i = 0; i < action.nodeIndex; i++) {
                if (allNodeList[i].state !== 'COMPLETED') {
                    incompleteNode = true;
                    break;
                }
            }
            if (incompleteNode && node.state === 'IN-PROGRESS') {
                return Object.assign({}, prevState, {
                    updateStateErr: true
                });
            } else {
                node.state = node.state === 'PENDING' ? 'IN-PROGRESS' : 'COMPLETED';
                return Object.assign({}, prevState, {
                    workflows: allPrevWorkflows
                });
            }
        case 'CLEAR_WORKFLOW_ERROR':
            return Object.assign({}, prevState,  {
                updateStateErr: false,
                nodeRemoved: false,
                workflowRemoved: false,
                workflowAdded: false
            });
        default:
            return prevState;
    }
}

export default workflow;