  
import { combineReducers } from 'redux';
import auth from './auth';
import workflowHeader from './workflowHeader';
import workflow from './workflow';
import message from './message';

export default combineReducers({
    auth,
    workflowHeader,
    workflow,
    message
});