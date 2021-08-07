import React from "react";
import styled from "styled-components";

const StyledCoverImage = styled.img`
  width: 100%;
  @media screen and (min-width: 1024px) and (max-width: 1440px) {
    height: 600px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    height: 400px;
  }
  @media screen and (min-width: 1441px) {
    height: 800px;
  }
  @media screen and (max-width: 768px) and (orientation: landscape) {
    height: 400px;
  }
  @media (orientation: portrait) {
    height: 250px;
  }
`;

const CoverImage = (props) => (
  <StyledCoverImage {...props} alt={"배너 이미지"} />
);

export default CoverImage;
