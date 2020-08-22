const initialState = {
    workflows: []
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
                workflows: prevWorkflows
            });
        default:
            return prevState;
    }
}

export default workflow;