import React from "react";
import EditorContainer from "../../containers/write/EditorContainer";
import WriteActionButtonsContainer from "../../containers/write/WriteActionButtonsContainer";
import Responsive from "../../components/common/Responsive/Responsive";
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
