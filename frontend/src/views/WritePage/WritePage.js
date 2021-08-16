import React from "react";
import Editor from "../../components/Dashboard/write/Editor";
import WriteActionButtons from "../../components/Dashboard/write/WriteActionButtons";
import Responsive from "../../components/common/Responsive/Responsive";

const WritePage = () => {
  return (
    <Responsive>
      <Editor />
      <WriteActionButtons />
    </Responsive>
  );
};

export default WritePage;
