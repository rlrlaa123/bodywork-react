import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { show: false };
  }
  showNavBar = (e) => {
    this.setState({
      show: true,
    });
  };

  hideNavBar = (e) => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <div
        className={"custom-nav"}
        onMouseEnter={this.showNavBar}
        onMouseLeave={this.hideNavBar}
      >
        <div className={"custom-nav-container-empty"}></div>
        <div className={"custom-nav-container"}>
          <div>바디웍휘트니스</div>
        </div>
        <div className={"custom-nav-container"}>
          <div>지점소개</div>
        </div>
        <div className={"custom-nav-container"}>
          <div>PT 프로그램</div>
        </div>
        <div className={"custom-nav-container"}>
          <div>바디웍 바디챌린져</div>
        </div>
        <div className={"custom-nav-container"}>
          <div>상담신청</div>
        </div>
        <div className={"custom-nav-container-empty"}></div>
        <div
          className={"nav-submenu"}
          style={{ display: this.state.show ? "grid" : "none" }}
        >
          <div className={"nav-submenu-box"}></div>
          <div className={"nav-submenu-box 0}"}>
            <div className={"nav-submenu-container"}>
              <Link to="/bodywork/1">CEO 인사말</Link>
            </div>
            <div className={"nav-submenu-container"}>
              <div>바디웍 소개</div>
            </div>
            <div className={"nav-submenu-container"}>
              <Link to="/bodywork/3">제휴 업체</Link>
            </div>
          </div>
          <div className={"nav-submenu-box 1"}>
            <div className={"nav-submenu-container"}>
              <Link to="/branch/1">지점 소개</Link>
            </div>
            <div className={"nav-submenu-container"}>
              <div>트레이너 소개</div>
            </div>
          </div>
          <div className={"nav-submenu-box 2"}>
            <div className={"nav-submenu-container"}>
              <div>퍼스널 트레이닝 소개</div>
            </div>
            <div className={"nav-submenu-container"}>
              <div>PT 진행순서</div>
            </div>
            <div className={"nav-submenu-container"}>
              <div>PT 프로그램</div>
            </div>
          </div>
          <div className={"nav-submenu-box 3"}>
            <div className={"nav-submenu-container"}>
              <div>바디웍챌린져란?</div>
            </div>
            <div className={"nav-submenu-container"}>
              <Link to="/bodychallenger/2">Before & After</Link>
            </div>
          </div>
          <div className={"nav-submenu-box 4"}>
            <div className={"nav-submenu-container"}>
              <Link to="/notice">공지사항</Link>
            </div>
            <div className={"nav-submenu-container"}>
              <div>이벤트</div>
            </div>
            <div className={"nav-submenu-container"}>
              <div>PT 레슨 문의</div>
            </div>
            <div className={"nav-submenu-container"}>
              <div>무료 PT 신청</div>
            </div>
            <div className={"nav-submenu-container"}>
              <div>실시간 상담</div>
            </div>
          </div>
          <div className={"nav-submenu-box"}></div>
        </div>
      </div>
    );
  }
}

export default NavBar;
