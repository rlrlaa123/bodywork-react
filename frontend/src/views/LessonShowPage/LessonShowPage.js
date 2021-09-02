import React from "react";
import PageTemplate from "../../components/common/PageTemplate/PageTemplate";
import LessonShowContainer from "../../containers/lessons/lesson/LessonShowContainer";
import banner from "../../assets/banner2.png";

const LessonShowPage = (props) => {
  return (
    <PageTemplate title="PT 레슨 문의" image={banner} type="dashboard">
      <LessonShowContainer type="lesson" />
    </PageTemplate>
  );
};

export default LessonShowPage;
