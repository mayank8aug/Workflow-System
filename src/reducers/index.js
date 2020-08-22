  
import { combineReducers } from 'redux';
import auth from './auth';
import workflowHeader from './workflowHeader';
import workflow from './workflow';

export default combineReducers({
    auth,
    workflowHeader,
    workflow
});