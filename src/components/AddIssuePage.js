import React from 'react';
import { withRouter } from 'react-router-dom';
import IssueForm from './IssueForm';

import IssueApi from '../data/IssueApi';

class AddIssuePage extends React.Component {
    constructor(props) {
      super(props);
      this.saveIssue = this.saveIssue.bind(this);
    }

    saveIssue(issue,newIssue) {

        IssueApi.saveIssue(issue);
        this.props.history.push('/');
    }

    render() {
        return (
            <IssueForm onSave={this.saveIssue} />
        );
    }
}

export default withRouter(AddIssuePage);
