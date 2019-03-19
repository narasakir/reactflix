'use strict'

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import VideosList from 'components/videos-list'
import VideoSingle from 'components/video-single'
import RegisterVideo from 'components/register-video'
import { headerHeight, footerHeight } from 'utils/constants'
import { fetchVideos } from 'reducers/videos/action-creators'

class VideoContainer extends PureComponent {
  componentDidMount () {
    this.props.fetchVideos()
  }

  render () {
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

const mapDispatchToProps = { fetchVideos }

export default connect(mapStateToProps, mapDispatchToProps)(VideoContainer)
