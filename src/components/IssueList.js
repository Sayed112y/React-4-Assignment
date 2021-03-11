import React from 'react';
import Issue from './Issue';

export default class IssueList extends React.Component {

  render() {
    const IssueNodes = this.props.issues.map(issue => (
        <Issue key={issue.id} id={issue.id} issuedescription={issue.issuedescription} severity={issue.severity} status={issue.status}>
          
        </Issue>
      
    ));
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Issue Description</th>
              <th>Severity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {IssueNodes}
          </tbody>
        </table>
      </div>
    );
  }
}
