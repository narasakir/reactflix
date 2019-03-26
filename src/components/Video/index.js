'use strict'

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import VideosList from '..//videos-list'
import VideoSingle from '../video-single'
import RegisterVideo from '../register-video'
import { headerHeight, footerHeight } from 'utils/constants'
import { withFirebase } from '../Firebase';
import { compose } from 'recompose';

class VideoContainer extends PureComponent {
  componentDidMount() {
    this.props.firebase.fetchVideos()
  }

  render() {
    const { isRegisterVideoFormOpened, videoSingleId, videos } = this.props

    return (
      <Main>
        {isRegisterVideoFormOpened && <RegisterVideo />}
        {videoSingleId && <VideoSingle id={videoSingleId} title={videos[videoSingleId].title} />}
        <VideosList />
      </Main>
    )
  }
}

const Main = styled.main`
  min-height: calc(100% - ${headerHeight} - ${footerHeight});
`

const mapStateToProps = (state) => ({
  isRegisterVideoFormOpened: state.ui.isRegisterVideoFormOpened,
  videoSingleId: state.videoSingle,
  videos: state.videos
})

export default compose(
  withFirebase,
  connect(mapStateToProps)
)(VideoContainer)
