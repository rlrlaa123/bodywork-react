import React from "react";
import "./App.css";
import Header from "./components/common/Header/Header";
import MobileNavBar from "./components/MobileNavBar/MobileNavBar";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Carousel1 from "./components/Carousel1/Carousel1";
import CEO from "./views/CEO/CEO";
import Branch from "./views/Branch/Branch";
import AlliancePage from "./views/AlliancePage/AlliancePage";
import Notice from "./views/Notice/Notice";
import NoticeShow from "./views/NoticeShow/NoticeShow";

const meta = {
  name: "viewport",
  content: "minimum-scale=1, initial-scale=1, width=device-width",
};

function App() {
  return (
    <div className="App" {...meta}>
      <MobileNavBar></MobileNavBar>
      <Header></Header>
      <NavBar></NavBar>
      <Route path="/" component={Carousel1} exact={true} />
      <Route path="/bodywork/1" component={CEO} />
      <Route path="/branch/1" component={Branch} />
      <Route path="/bodywork/3" component={AlliancePage} />
      <Route path="/notice" exact component={Notice} />
      <Route path="/notice/:noticeId" component={NoticeShow} />
    </div>
  );
}

export default App;
