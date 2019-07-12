import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import ForumIndex from './ForumIndex';
import SubmitThread from './SubmitThread';
import Thread from './Thread';
import NavigationBar from './common/NavigationBar';
import NotFound from './common/NotFound';

import './App.css';

class App extends React.Component {
  // An example fetch request
  componentDidMount() {
    fetch('/refresh-session').then(res => {
      return res.ok ? res.json() : Promise.reject();
    }).then(res => {
      console.log(`Reponse from /refresh-session: ${JSON.stringify(res)}`);
    });
  }

  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route exact path='/' component={ForumIndex} />
          <Route exact path='/index' component={ForumIndex} />
          <Route exact path='/submit' component={SubmitThread} />
          <Route exact path='/thread/:number' component={Thread} />
          <Route exact path='/not-found' component={NotFound} />
          <Route path='/:invalid' component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
