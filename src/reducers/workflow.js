const initialState = {
    workflows: [],
    nodeStateErr: false,
    nodeRemoved: false
};

function workflow(prevState = initialState, action) {
    switch(action.type) {
        case 'ADD_WORKFLOW':
            return Object.assign({}, prevState, {
                workflows: prevState.workflows.concat(action.workflow)

            });
        case 'DELETE_WORKFLOW':
            prevState.workflows.splice(action.index, 1);
            return Object.assign({}, prevState, {
                workflows: [...prevState.workflows]
            });
        case 'ADD_NODE':
            const prevWorkflows = JSON.parse(JSON.stringify(prevState.workflows));
            prevWorkflows[action.index].nodes.push(action.node);
            return Object.assign({}, prevState, {
                workflows: prevWorkflows,
                nodeStateErr: false
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
                    nodeStateErr: true
                });
            } else {
                node.state = node.state === 'PENDING' ? 'IN-PROGRESS' : 'COMPLETED';
                return Object.assign({}, prevState, {
                    workflows: allPrevWorkflows
                });
            }
        case 'CLEAR_WORKFLOW_ERROR':
            return Object.assign({}, prevState,  {
                nodeStateErr: false,
                nodeRemoved: false
            });
        default:
            return prevState;
    }
}

export default workflow;