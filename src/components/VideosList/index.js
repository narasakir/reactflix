import React from 'react'
import styled from 'styled-components'
import Play from '../play'

const VideosList = () => (
  <Container>
    {
      Array.from({ length: 10 }).map((item, index) => (
        <Video key={index}>
          <VideoThumb>
            <PlayStyled />
          </VideoThumb>
          <VideoTitle>Titulo do Video</VideoTitle>
        </Video>
      ))
    }
  </Container>
)

const PlayStyled = styled(Play)`
  width: 50px;
  height: 50px;
  fill: #999;
  transition: all 0.15s ease-in-out;
`

const Video = styled.section`
  padding: 10px;    
  :hover{
      & ${PlayStyled}{
        transform: scale(1.5)
      }
  }
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  & ${Video}{
    flex: 1 1 300px;
    margin: 0 5px;
  }
`

const VideoThumb = styled.div`\
  border: 1px solid #999;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const VideoTitle = styled.h2`
  font-size: 18px;
`

export default VideosList
