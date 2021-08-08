import React from "react";
import styled from "styled-components";

import Container from "@material-ui/core/Container";

import CoverImage from "../CoverImage/CoverImage";
import MenuTitle from "../MenuTitle/MenuTitle";

const PageTemplateBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;
  background-color: #fff;
`;

const PageTemplate = ({ children, title, image }) => {
  return (
    <div>
      <CoverImage src={image} />
      <MenuTitle title={title} />
      <Container>
        <PageTemplateBlock>{children}</PageTemplateBlock>
      </Container>
    </div>
  );
};

export default PageTemplate;
