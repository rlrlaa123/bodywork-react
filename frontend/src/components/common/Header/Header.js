import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import sns1 from "../../../assets/sns1.png";
import sns2 from "../../../assets/sns2.png";
import sns3 from "../../../assets/sns3.jpg";
import styled from "styled-components";

import "./Header.css";

const StyledHeader = styled.header`
  display: flex !important;
  justify-content: space-between;
  font-weight: bold;
  text-align: center;
  fontSize: "2vw"
  padding: 20px;
  
  a {
    font-size: 15px;
  }

  @media (orientation: portrait) {
    display: block !important;
    justify-content: space-between;
  }
`;

class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <div style={{ width: "100px" }}></div>
        <div>
          <Link to="/">
            <img src={logo} alt={"logo"} className="header-image" />
          </Link>
        </div>
        <div className={"snsWrapper"}>
          <a href={"https://cafe.naver.com/bodywork119"}>
            <img src={sns3} width={"30px"} alt={"naver cafe"} />
          </a>
          <a href={"https://blog.naver.com/crossfita2f"}>
            <img src={sns1} width={"30px"} alt={"naver blog"} />
          </a>
          <a href={"https://www.instagram.com/bodywork119/"}>
            <img src={sns2} width={"30px"} alt={"instagram"} />
          </a>
        </div>
      </StyledHeader>
    );
  }
}

export default Header;
