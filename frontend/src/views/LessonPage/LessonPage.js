import React from "react";
import PageTemplate from "../../components/common/PageTemplate/PageTemplate";
import LessonsListContainer from "../../containers/lessons/lessons/LessonsListContainer";
import banner from "../../assets/banner2.png";

const LessonPage = (props) => {
  return (
    <PageTemplate title="PT 레슨 문의" image={banner} type="dashboard">
      <LessonsListContainer type="lesson" />
    </PageTemplate>
  );
};

export default LessonPage;
