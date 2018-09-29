import React from 'react'
import { Route, Switch } from 'react-router'

import AuthWrapper from '../components/AuthWrapper'
import Login from  '../components/login/Login'
import Signup from '../components/signup/Signup'
import Home from '../components/Home'
const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/app" component={AuthWrapper} />
    </Switch>
  </div>
)

export default routes
