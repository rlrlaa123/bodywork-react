import React from "react";
import "./App.css";
import Header from "./components/common/Header/Header";
import MobileNavBar from "./components/MobileNavBar/MobileNavBar";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import CEO from "./views/CEO/CEO";
// import Branch from "./views/Branch/Branch";
import AlliancePage from "./views/AlliancePage/AlliancePage";
import BeforeAfterPage from "./views/BeforeAfterPage/BeforeAfterPage";
import NoticePage from "./views/NoticePage/NoticePage";
import NoticeShowPage from "./views/NoticeShowPage/NoticeShowPage";
import LessonPage from "./views/LessonPage/LessonPage";
import LessonShowPage from "./views/LessonShowPage/LessonShowPage";
import WritePage from "./views/WritePage/WritePage";
import HomePage from "./views/HomePage/HomePage";
import TodoForm from "./components/TestingTodoList/TodoForm";

const meta = {
  name: "viewport",
  content: "minimum-scale=1, initial-scale=1, width=device-width",
};

function App() {
  return (
    <div className="App" {...meta}>
      <TodoForm />
      <MobileNavBar></MobileNavBar>
      <Header></Header>
      <NavBar></NavBar>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/bodywork/1" component={CEO} />
      {/* <Route path="/branch/1" component={Branch} /> */}
      <Route path="/bodywork/3" component={AlliancePage} />
      <Route path="/bodychallenger/2" component={BeforeAfterPage} />
      <Switch>
        <Route path="/notice" exact component={NoticePage} />
        <Route path="/notice/:noticeId" component={NoticeShowPage} />
      </Switch>
      <Switch>
        <Route path="/lesson" exact component={LessonPage} />
        <Route path="/lesson/create/" component={WritePage} />
        <Route path="/lesson/:lessonId" component={LessonShowPage} />
      </Switch>
    </div>
  );
}

export default App;
