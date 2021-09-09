import React from "react";
import styled from "styled-components";
import videoSrc from "../../../assets/home/bodywork.mp4";
import playBtn from "../../../assets/home/play.png";

const StyledDiv = styled.div`
  position: relative;
  margin: 0 50px;
  cursor: pointer;
  margin-bottom: 50px;
`;

const StyeldVideo = styled.video`
  display: block;
  max-height: 750px;
  width: 100%;
`;

const StyledVideoBtn = styled.img`
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transition: 1.5s all;
  width: 10%;
  transform: translateX(-50%) translateY(-50%);
  max-width: 64px;
  max-height: 64px;
`;

const Video = () => {
  const videoRef = React.createRef();
  const playBtnRef = React.createRef();

  const handleVideo = () => {
    const video = videoRef.current;
    const playBtnStyle = playBtnRef.current.style;

    if (video.paused) {
      video.play();
      playBtnStyle.transition = "1.5s all";
      playBtnStyle.opacity = 0;
    } else {
      video.pause();
      playBtnStyle.transition = "0.1s all";
      playBtnStyle.opacity = 1;
    }
  };

  return (
    <StyledDiv>
      <StyledVideoBtn alt="video" src={playBtn} ref={playBtnRef} />
      <StyeldVideo
        src={videoSrc}
        ref={videoRef}
        preload="metadata"
        autoPlay
        muted
        loop
        onClick={handleVideo}
      />
    </StyledDiv>
  );
};

export default Video;
