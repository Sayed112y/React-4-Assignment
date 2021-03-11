import React from 'react';
import {BrowserRouter as Router, Route, Switch,NavLink,Redirect} from 'react-router-dom';
import AllIssuesPage from './components/AllIssuesPage';
import AddIssuePage from './components/AddIssuePage';
import IssueDetailPage from './components/IssueDetailPage';
class Links extends React.Component{
  render()
  {
    return(
      <div>
        <nav>
        <NavLink style={{margin:'15px'}} exact activeClassName="active" to="/about">About</NavLink>
        <NavLink style={{margin:'15px'}} exact activeClassName="active" to="/issue">Issues</NavLink>
        </nav>
      </div>
    );
  }
}


export default class App extends React.Component {
  render() {
      return (
        <Router>
          <div>
            <Links/>
            <Switch>
            <Route  path="/about" render={()=> <h2>About - This Application Used To Track Status Of Issues Raised</h2>}/>
              <Route  path="/issue" component={AllIssuesPage} />
              <Route path="/addissue" component={AddIssuePage} />
              <Route path="/issue1/:issuedescription" component={IssueDetailPage} />
              
            </Switch>
          </div>
        </Router>
      );
  }
}
