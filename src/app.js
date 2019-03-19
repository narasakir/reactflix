'use strict'

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled, { injectGlobal } from 'styled-components'
import Header from 'components/header'
import Footer from 'components/footer'
import Login from 'components/login'
import PageNotFound from 'components/page-not-found'

import 'normalize.css'
import 'milligram'

import VideoContainer from './components/Video'

const App = () => (
  <Container>
    <Header />

    <BrowserRouter>
      <Switch>
        <Route path='/login' exact={true} component={Login} />
        <Route path='/' component={VideoContainer} />
        <Route path='*' component={PageNotFound} />
      </Switch>
    </BrowserRouter>

    <Footer />
  </Container>
)

injectGlobal`
  html, body, div[data-js="app"] {
    height: 100%;
  }
`

const Container = styled.div`
  height: 100%;
`
export default App
