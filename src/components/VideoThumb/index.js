import React from 'react'
import styled from 'styled-components'
import Play from '../play'

const VideoThumbnail = ({ id }) => (
  <VideoThumb id={id}>
    <PlayStyled />
  </VideoThumb>
)

const PlayStyled = styled(Play)`
  width: 50px;
  height: 50px;
  fill: #ff0000;
  transition: all 0.15s ease-in-out;
`
const VideoThumb = styled.div`
  border: 1px solid #999;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url(https://img.youtube.com/vi/${props => props.id}/mqdefault.jpg);
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

export default VideoThumbnail
