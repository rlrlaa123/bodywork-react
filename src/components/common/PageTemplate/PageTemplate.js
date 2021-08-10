import React from "react";
import styled, { css } from "styled-components";

import Container from "@material-ui/core/Container";

import CoverImage from "../CoverImage/CoverImage";
import MenuTitle from "../MenuTitle/MenuTitle";

const PageTemplateBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;
  background-color: #fff;
  ${(props) => {
    return (
      props.type === "dashboard" &&
      css`
        display: block;
      `
    );
  }}
`;

const PageTemplate = (props) => {
  return (
    <div>
      <CoverImage src={props.image} />
      <MenuTitle title={props.title} />
      <Container>
        <PageTemplateBlock type={props.type}>
          {props.children}
        </PageTemplateBlock>
      </Container>
    </div>
  );
};

export default PageTemplate;
