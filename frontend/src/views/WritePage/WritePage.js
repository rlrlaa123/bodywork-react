import React from "react";
import EditorContainer from "../../containers/write/EditorContainer";
import WriteActionButtons from "../../components/Dashboard/write/WriteActionButtons";
import Responsive from "../../components/common/Responsive/Responsive";

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <WriteActionButtons />
    </Responsive>
  );
};

export default WritePage;
