import React, { Suspense } from 'react'
import { HashRouter } from 'react-router-dom'
import Login from './routes/Login'
import Routes from './routes'
import Navbar from './components/Navbar'

export default () => (
  <HashRouter>
    <Navbar />
    <Suspense fallback={<Login />}>
      <Routes />
    </Suspense>
  </HashRouter>
)