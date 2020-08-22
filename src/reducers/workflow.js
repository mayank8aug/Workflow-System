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
        default:
            return prevState;
    }
}

export default workflow;