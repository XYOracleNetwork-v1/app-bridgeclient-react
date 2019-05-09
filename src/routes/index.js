import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import About from './About'

export default () => (
  <Switch>
    <Route path='/' component={Dashboard} exact />
    <Route path='/about' component={About} exact />
  </Switch>
)