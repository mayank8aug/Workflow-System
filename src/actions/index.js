export const types = {
    LOGIN_USER: 'LOGIN_USER',
    LOGOUT_USER: 'LOGOUT_USER',
    SET_SEARCH_QUERY: 'SET_SEARCH_QUERY',
    SET_FILTER: 'SET_FILTER',
    ADD_WORKFLOW: 'ADD_WORKFLOW',
    DELETE_WORKFLOW: 'DELETE_WORKFLOW',
    ADD_NODE: 'ADD_NODE',
    DELETE_NODE: 'DELETE_NODE'
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