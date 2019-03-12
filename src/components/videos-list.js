'use strict'

import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Play from 'components/play'
import { selectVideoSingle } from 'reducers/video-single/action-creators'

const VideosList = ({ videos, handleClick }) => (
  <Container>
    {Object.keys(videos).map((id) => (
      <Video key={id}>
        <VideoLink href='#' onClick={handleClick(id)}>
          <VideoThumb style={{ backgroundImage: `url(https://img.youtube.com/vi/${id}/mqdefault.jpg)` }}>
            <PlayStyled />
          </VideoThumb>
          <VideoTitle>{videos[id].title}</VideoTitle>
        </VideoLink>
      </Video>
    ))}
  </Container>
)

const PlayStyled = styled(Play)`
  fill: #ff0000;
  height: 50px;
  transition: all .15s ease-in-out;
  width: 50px;
`

const Video = styled.section``

const VideoLink = styled.a`
  color: inherit;
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;

  & ${Video} {
    flex: 1 1 300px;
    margin: 0 5px 5px;
  }
`

const VideoThumb = styled.div`
  border: 1px solid #999;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  :hover{
    & ${PlayStyled}{
      transform: scale(1.5);
    }
    &:after{
      background: rgba(0, 0, 0, 0);
    }
  }
  &:after{
    content: '';
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all 0.15s;
  }
`

const VideoTitle = styled.h2`
  font-size: 18px;
`

const mapStateToProps = (state) => ({
  videos: state.videos
})

const mapDispatchToProps = (dispatch) => ({
  handleClick: (id) => (e) => {
    e.preventDefault()
    dispatch(selectVideoSingle(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(VideosList)
