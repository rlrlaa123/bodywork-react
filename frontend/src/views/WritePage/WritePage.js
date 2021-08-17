import React from "react";
import EditorContainer from "../../containers/write/EditorContainer";
import WriteActionButtonsContainer from "../../containers/write/WriteActionButtonsContainer";
import Responsive from "../../components/common/Responsive/Responsive";

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <WriteActionButtonsContainer />
    </Responsive>
  );
};

export default WritePage;
