'use strict'

import React, { PureComponent } from 'react'
import styled, { injectGlobal } from 'styled-components'
import { connect } from 'react-redux'

import 'normalize.css'
import 'milligram'

import { headerHeight, footerHeight } from 'utils/contants'
import VideosList from './components/VideosList'
import VideoSingle from './components/VideoSingle'
import RegisterVideo from './components/RegisterVideo'
import Header from './components/Header'
import Footer from './components/Footer'
import { fetchVideos } from 'reducers/vides/action-creators'

class App extends PureComponent {
  componentDidMount() {
    this.props.fetchVideos();
  }

  render() {
    const { isRegisterVideoFormOpened } = this.props;
    return (
      <Container>
        <Header />
        <Main>
          {isRegisterVideoFormOpened && <RegisterVideo />}
          <VideoSingle />
          <VideosList />
        </Main>
        <Footer />
      </Container>
    )
  }
}

injectGlobal`
  html, body, div[data-js="app"]{
    height: 100%;
  }
`
const Container = styled.div`
  height: 100%
`

const Main = styled.main`
  min-height:calc(100% - ${headerHeight} - ${footerHeight});
`
const mapStateToProps = (state) => ({
  isRegisterVideoFormOpened: state.ui.isRegisterVideoFormOpened
})

const maoDispatchToProps = (dispatch) => ({
  fetchVideos: () => dispatch(fetchVideos())
})
export default connect(mapStateToProps, maoDispatchToProps)(App)
