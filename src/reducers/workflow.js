const initialState = {
    workflows: [],
    updateStateErr: false,
    nodeRemoved: false,
    workflowRemoved: false,
    persistedWorkflows: [],
    searchQuery: null
};

function workflow(prevState = initialState, action) {
    switch(action.type) {
        case 'ADD_WORKFLOW':
            return Object.assign({}, prevState, {
                persistedWorkflows: prevState.persistedWorkflows.concat(action.workflow),
                updateStateErr: false,
                workflowAdded: true
            });
        case 'DELETE_WORKFLOW':
            prevState.persistedWorkflows.splice(action.index, 1);
            return Object.assign({}, prevState, {
                workflows: [...prevState.persistedWorkflows],
                updateStateErr: false,
                workflowRemoved: true
            });
        case 'UPDATE_WORKFLOW_STATE':
            const workflows = JSON.parse(JSON.stringify(prevState.persistedWorkflows));
            const workflow = workflows[action.index];
            const canNotBeUpdated = workflow.nodes.some(node => node.state !== 'COMPLETED');
            if (canNotBeUpdated) {
                return Object.assign({}, prevState, {
                    updateStateErr: true
                });
            } else {
                workflow.state = workflow.state === 'PENDING' ? 'COMPLETED' : 'PENDING';
                return Object.assign({}, prevState, {
                    persistedWorkflows: workflows
                });
            }
        case 'UPDATE_WORKFLOWS':
            const persisted = JSON.parse(JSON.stringify(prevState.persistedWorkflows));
            if (action.updateType === 'fromPersist') {
                return Object.assign({}, prevState, {
                    workflows: persisted,
                    saved: false
                });
            } else {
                return Object.assign({}, prevState, {
                    persistedWorkflows: prevState.workflows,
                    saved: true
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
                workflowAdded: false,
                saved: false
            });
        case 'UPDATE_WORKFLOW':
            const wf = prevState.workflows[action.index];
            Object.assign(wf, action.data);
            return Object.assign({}, prevState, {
                workflows: prevState.workflows
            });
        case 'UPDATE_NODE':
            const currentNode = prevState.workflows[action.workflowIndex].nodes[action.nodeIndex];
            Object.assign(currentNode, action.data);
            return Object.assign({}, prevState, {
                workflows: prevState.workflows
            });
        case 'SHUFFLE_NODES':
            const wfToShuffle = prevState.workflows[action.index];
            const wfNodes = wfToShuffle.nodes;
            for (let i = wfNodes.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [wfNodes[i], wfNodes[j]] = [wfNodes[j], wfNodes[i]];
            }
            return Object.assign({}, prevState, {
                workflows: prevState.workflows
            });
        case 'SET_SEARCH_QUERY':
            return Object.assign({}, prevState, {
                searchQuery: action.query.trim().toLowerCase()
            });
        default:
            return prevState;
    }
}

export default workflow;