import React from "react";
// import EditorContainer from "../../containers/write/EditorContainer";
import WriteActionButtonsContainer from "../../containers/write/WriteActionButtonsContainer";
import PageTemplate from "../../components/common/PageTemplate/PageTemplate";
import banner from "../../assets/banner2.png";
import EditorTemp from "../../components/Dashboard/write/EditorTemp";

const WritePage = () => {
  return (
    <PageTemplate title="PT 레슨문의" image={banner} type="dashboard">
      {/* <EditorContainer /> */}
      <EditorTemp />
      <WriteActionButtonsContainer />
    </PageTemplate>
  );
};

export default WritePage;
