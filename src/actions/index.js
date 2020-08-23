export const types = {
    LOGIN_USER: 'LOGIN_USER',
    LOGOUT_USER: 'LOGOUT_USER',
    SET_SEARCH_QUERY: 'SET_SEARCH_QUERY',
    SET_FILTER: 'SET_FILTER',
    ADD_WORKFLOW: 'ADD_WORKFLOW',
    DELETE_WORKFLOW: 'DELETE_WORKFLOW',
    ADD_NODE: 'ADD_NODE',
    DELETE_NODE: 'DELETE_NODE',
    UPDATE_NODE_STATE: 'UPDATE_NODE_STATE',
    UPDATE_GROWL: 'UPDATE_GROWL',
    CLEAR_WORKFLOW_ERROR: 'CLEAR_WORKFLOW_ERROR'
};

export function loginUser(email) {
    return { type: types.LOGIN_USER, email };
}

export function logoutUser() {
    return { type: types.LOGOUT_USER };
}

export function setSearchQuery(query) {
    return { type: types.SET_SEARCH_QUERY, query };
}

export function setFilter(filterState) {
    return { type: types.SET_FILTER, filterState };
}

export function addWorkflow() {
    return { type: types.ADD_WORKFLOW, workflow: { name: 'New Workflow', state: 'PENDING', nodes: [] } };
}

export function deleteWorkflow(index) {
    return { type: types.DELETE_WORKFLOW, index };
}

export function addNode(index) {
    return { type: types.ADD_NODE, index, node: { title: 'New Task', content: 'Task Content', state: 'PENDING'} };
}

export function deleteNode(index) {
    return { type: types.DELETE_NODE, index };
}

export function updateState(workflowIndex, nodeIndex) {
    return { type: types.UPDATE_NODE_STATE, workflowIndex, nodeIndex };
}

export function growlUpdate(data) {
    return { type: types.UPDATE_GROWL, data };
}

export function clearWorkflowError() {
    return { type: types.CLEAR_WORKFLOW_ERROR };
}