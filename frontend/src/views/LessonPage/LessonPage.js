import React from "react";
import PageTemplate from "../../components/common/PageTemplate/PageTemplate";
import DashBoardForm from "../../components/Dashboard/DashBoardForm/DashBoardForm";
import banner from "../../assets/banner2.png";

const LessonPage = (props) => {
  return (
    <PageTemplate title="PT 레슨 문의" image={banner} type="dashboard">
      <DashBoardForm
        url={props.location.search}
        history={props.history}
        type="lesson"
      />
    </PageTemplate>
  );
};

export default LessonPage;
