'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import App from './app'
import configureStore from './redux-flow/configure-store'

const store = configureStore()
const db = window.firebase.database()
const videos = db.ref('videos')

videos.on('value', (snapshot) => {
  console.log('snapshot --> ', snapshot.val())
}, (error) => {
  console.log('error', error)
})

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <NextApp />
      </Provider>
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    renderApp(NextApp)
  })
}
