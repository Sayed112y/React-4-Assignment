import React from 'react';
import {withRouter, Prompt, useHistory, Link} from 'react-router-dom';

let authenticated = true;
class IssueDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modified: false
    };
    this.authenticate(props);
  }

  authenticate(params) {
    const history = params.history;
    if (!authenticated) {
      alert("Not authenticated, hence redirecting back...");
      history.replace('/');
    }
    window.confirm("Are you sure you want to view the details?")
  }

  setModified() {
    this.setState({modified: true})
  }

  render() {
    return (
      <div>
        <h1>IssueDetails</h1><br></br>
        <label><b>IssueDescription:</b> </label>
       <b><input type="readonly" defaultValue={this.props.match.params.issuedescription} size="100" onInput={() => this.setModified()}/></b> <br></br>
        <Prompt when={this.state.modified} /><br></br>
        <Link to={useHistory.goBack}>Back</Link>
      </div>
    );
  }
}

export default withRouter(IssueDetail);
