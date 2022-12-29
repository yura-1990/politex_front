import React from "react";
import styled from "styled-components";
import videoUrl from "@/assets/vedio.mp4";

const VideoHomeWrapper = styled.div`
  video {
    width: 100%;
    height: 1080px;
    object-fit: cover;
    object-position: center;
    @media only screen and (max-width: 1512px) {
      height: 840px;
    }
    @media only screen and (max-width: 900px) {
      height: 500px;
    }
    @media only screen and (max-width: 560px) {
      height: 250px;
    }
  }
`;

const VideoHome = () => {
  return (
    <VideoHomeWrapper>
      <video src={videoUrl} controls></video>
    </VideoHomeWrapper>
  );
};

export default VideoHome;
