import React, { Suspense } from 'react'
import { HashRouter } from 'react-router-dom'
import Login from './routes/Login'
import Routes from './routes'

export default () => (
  <Suspense fallback={<Login />}>
    <HashRouter>
      <Routes />
    </HashRouter>
  </Suspense>
)