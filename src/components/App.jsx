import React, { useState, useEffect, Fragment } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Page1 from './pages/Page1'
import Page2 from './pages/Page2'

const App = props => {
  return (
    <Switch>
      <Route path={'/page2'} component={Page2} />
      <Route path={'/'} component={Page1} />
    </Switch>
  )
}
const mapStateToProps = state => {
  return {}
}

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(App)
)
