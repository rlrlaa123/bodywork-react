import React from "react";
import PageTemplate from "../../components/common/PageTemplate/PageTemplate";
import DashBoardShowForm from "../../components/Dashboard/DashBoardShowForm/DashBoardShowForm";
import banner from "../../assets/banner2.png";

const LessonShowPage = (props) => {
  return (
    <PageTemplate title="PT 레슨 문의" image={banner} type="dashboard">
      <DashBoardShowForm pathname={props.location.pathname} type="lesson" />
    </PageTemplate>
  );
};

export default LessonShowPage;
