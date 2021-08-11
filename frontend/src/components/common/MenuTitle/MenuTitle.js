import React from "react";
import styled from "styled-components";

const StyledHr = styled.hr`
  margin: 50px;
`;

const StyledH3 = styled.h3`
  margin: 50px 0;
`;

const MenuTitle = (props) => {
  const { title } = { ...props };

  return (
    <div>
      <StyledH3>{title}</StyledH3>
      <StyledHr />
    </div>
  );
};

export default MenuTitle;
