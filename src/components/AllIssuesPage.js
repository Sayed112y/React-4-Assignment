import React from 'react';
import { Link } from 'react-router-dom';
import IssueList from './IssueList';
import IssueStore from '../stores/IssueStore';
import InitializeActions from '../actions/InitializeActions';
import IssueApi from '../data/IssueApi';

export default class AllIssuesPage extends React.Component {
    constructor(props) {
      super(props);
      this._onChange = this._onChange.bind(this);

//F1:
      this.state = {
        issues: IssueStore.getAllIssues()
      }

    }

    componentDidMount() {
        IssueStore.addChangeListener(this._onChange);
        InitializeActions.initIssues(); 
    }

    componentWillUnmount() {
        IssueStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState({ issues: IssueStore.getAllIssues() });
    }

    render() {
        return (
            <div>
                <h1>Issue List</h1>
                <IssueList issues={this.state.issues} />
                <br/>
                <Link to="/addissue">Add Issue</Link>
            </div>
        );
    }
}
