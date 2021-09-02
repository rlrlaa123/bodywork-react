import React from "react";
import EditorContainer from "../../containers/lessons/write/EditorContainer";
import WriteActionButtonsContainer from "../../containers/lessons/write/WriteActionButtonsContainer";
import PageTemplate from "../../components/common/PageTemplate/PageTemplate";
import banner from "../../assets/banner2.png";

const WritePage = () => {
  return (
    <PageTemplate title="PT 레슨문의" image={banner} type="dashboard">
      <EditorContainer />
      <WriteActionButtonsContainer />
    </PageTemplate>
  );
};

export default WritePage;
