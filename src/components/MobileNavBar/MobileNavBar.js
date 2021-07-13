import React from "react";
import logo from "../../assets/logo.jpg";
import downArrow from "../../assets/down-arrow.png";
import sns1 from "../../assets/sns1.png";
import sns2 from "../../assets/sns2.png";
import sns3 from "../../assets/sns3.jpg";

import "./MobileNavBar.css";

class MobileNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { show: false, width: 0 };
  }
  showNavBar = (e) => {
    this.setState({
      show: true,
      width: 250,
    });
  };

  hideNavBar = (e) => {
    this.setState({
      show: false,
      width: 0,
    });
  };

  render() {
    return (
      <div>
        <div className="custom-navbar">
          <div style={{ padding: "10px" }}>
            <span
              style={{ fontSize: "30px", cursor: "pointer", color: "dimgrey" }}
              onClick={this.showNavBar}
            >
              &#9776;
            </span>
          </div>
          <div></div>
        </div>
        <div
          id="mySidenav"
          className="sidenav"
          style={{
            display: this.state.show ? "block" : "none",
            width: this.state.width,
          }}
        >
          <img alt="logo" src={logo} className="navbar-logo" width="25px" />
          <span
            href={`javascript:void(0)`}
            className="closebtn"
            onClick={this.hideNavBar}
          >
            &times;
          </span>
          <div className="navbar-menu home">
            <a
              href="/"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Home
            </a>
          </div>
          <div className="dropdown-btn down-arrow">
            바디웍 휘트니스
            <img alt="down arrow" src={downArrow} width="15px" />
          </div>
          <div className="dropdown-container">
            <a href="/bodywork/1">CEO 인사말</a>
            <a href="/bodywork/2">바디웍 소개</a>
            <a href="/bodywork/3">제휴 업체</a>
          </div>
          <div className="dropdown-btn down-arrow">
            지점소개
            <img alt="down arrow" src={downArrow} width="15px" />
          </div>
          <div className="dropdown-container">
            <a href="/branch/1/1">지점소개</a>
            <a href="/branch/2/1">트레이너 소개</a>
          </div>
          <div className="dropdown-btn down-arrow">
            PT 프로그램
            <img alt="down arrow" src={downArrow} width="15px" />
          </div>
          <div className="dropdown-container">
            <a href="/ptprogram/1">퍼스널 트레이닝 소개</a>
            <a href="/ptprogram/2">PT 진행순서</a>
            <a href="/ptprogram/3">PT 프로그램</a>
          </div>
          <div className="dropdown-btn down-arrow">
            바디웍 바디챌린져
            <img alt="down-arrow" src={downArrow} width="15px" />
          </div>
          <div className="dropdown-container">
            <a href="/bodychallenger/1">바디챌린져란?</a>
            <a href="/bodychallenger/2">Before & After</a>
          </div>
          <div className="dropdown-btn down-arrow">
            상담신청
            <img alt="down-arrow" src={downArrow} width="15px" />
          </div>
          <div className="dropdown-container">
            <a href="/notice">공지사항</a>
            <a href="/event">이벤트</a>
            <a href="/lesson">PT 레슨문의</a>
            <a href="/freelesson">무료 PT 신청</a>
            <a href="/consult">실시간 상담</a>
          </div>
          <div style={{ textAlign: "left", marginLeft: "10px" }}>
            <span
              onClick={() => {
                window.location.href = "https://cafe.naver.com/bodywork119";
              }}
            >
              <img
                alt="naver cafe"
                src={sns3}
                width="30px"
                style={{ marginRight: "5px" }}
              />
            </span>
            <span
              onClick={() => {
                window.location.href = "https://blog.naver.com/crossfita2f";
              }}
            >
              <img
                alt="naver blog"
                src={sns1}
                width="30px"
                style={{ marginRight: "5px" }}
              />
            </span>
            <span
              onClick={() => {
                window.location.href = "https://www.instagram.com/bodywork119/";
              }}
            >
              <img
                alt="instagram"
                src={sns2}
                width="30px"
                style={{ marginRight: "5px" }}
              />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default MobileNavBar;
