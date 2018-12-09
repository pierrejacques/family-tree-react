import * as React from 'react'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import './App.less'

import LoginPage from './pages/login/login'
import Loadable from './shared/loadable/loadable'

class App extends React.PureComponent {
  public render() {
    return (
      <div id="app">
        <Router>
          <Switch>
            <Route path='/login' component={LoginPage} />
            <Route path='/my-family' component={Loadable(() => import('./pages/my-family/my-family'))} />
            <Redirect to='/login' />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
