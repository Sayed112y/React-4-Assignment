import Dispatcher from '../dispatcher/Dispatcher';
import IssueApi from '../data/IssueApi';
import * as ActionTypes from '../constants/ActionTypes';

export default class InitializeActions {
    static initIssues() {

        IssueApi.getAllIssues(data =>
        
        Dispatcher.dispatch({
        
        actionType: ActionTypes.INITIALIZE,
        
        issues: data
        
        }));
    }
}
