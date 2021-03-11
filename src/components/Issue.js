import React from 'react';
import {Link} from 'react-router-dom';

export default class Issue extends React.Component {
  
  render() {
    const path = `/issue1/${this.props.issuedescription}`;
    return (
      <tr>
        <td>{this.props.id}</td>
        <td><Link to={path}>{this.props.issuedescription}</Link></td>
        <td>{this.props.severity}</td>
        <td>{this.props.status}</td>
        
      </tr>
    );
  }
}
