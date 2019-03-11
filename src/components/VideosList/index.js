import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { selectVideoSingle } from "reducers/video-single/action-creators";
import VideoThumb from "../VideoThumb";

const VideosList = ({ videos, handleClick }) => (
  <Container>
    {Object.keys(videos).map(id => (
      <Video key={id}>
        <VideoLink href="#" onClick={handleClick(id)}>
          <VideoThumb id={id} />
          <VideoTitle>{videos[id].title}</VideoTitle>
        </VideoLink>
      </Video>
    ))}
  </Container>
);

const Video = styled.section`'
  padding: 10px;
`;
const VideoLink = styled.a`
  color: inherit;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  & ${Video} {
    flex: 1 1 300px;
    margin: 0 5px;
  }
`;

const VideoTitle = styled.h2`
  font-size: 18px;
`;

const mapStateToProps = state => ({
  videos: state.videos
});

const mapDispatchToProps = dispatch => ({
  handleClick: id => e => {
    e.preventDefault();
    dispatch(selectVideoSingle(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideosList);
