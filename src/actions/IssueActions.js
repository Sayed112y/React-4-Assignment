import Dispatcher from '../dispatcher/Dispatcher';
import IssueApi from '../data/IssueApi';
import * as ActionTypes from '../constants/ActionTypes';

export default class IssueActions {
    static addIssue(issue) {
        let newIssue = IssueApi.saveIssue(issue);
        console.log("Dispatching Add Issue ...");
        Dispatcher.dispatch({
            actionType: ActionTypes.ADD_ISSUE,
            issue: newIssue
        });
    }