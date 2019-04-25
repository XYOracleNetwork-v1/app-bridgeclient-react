import React, { Suspense } from 'react'
import { HashRouter } from 'react-router-dom'
import Login from './routes/Login'
import Routes from './routes'
import Navbar from './components/Navbar'
import { Page } from './components/Layout'

export default () => (
  <HashRouter>
    <Navbar />
    <Suspense fallback={<Login />}>
      <Routes />
    </Suspense>
  </HashRouter>
)