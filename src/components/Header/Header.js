import React from "react";
import logo from "../../assets/logo.png";
import sns1 from "../../assets/sns1.png";
import sns2 from "../../assets/sns2.png";
import sns3 from "../../assets/sns3.jpg";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <header style={{ fontSize: "2vw" }}>
        <div style={{ width: "100px" }}></div>
        <div>
          <a href="/">
            <img src={logo} alt={"logo"} className="header-image" />
          </a>
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
      </header>
    );
  }
}

export default Header;
