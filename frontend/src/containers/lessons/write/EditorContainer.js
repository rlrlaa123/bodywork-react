import React, { useEffect, useCallback } from "react";
import Editor from "../../../components/Dashboard/write/Editor";
import { useDispatch } from "react-redux";
import { changeField, initialize } from "../../../modules/lessons/write";

const EditorContainer = () => {
  const dispatch = useDispatch();
  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch]
  );
  // 언마운트될 때 초기화@
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);
  return <Editor onChangeField={onChangeField} />;
};

export default EditorContainer;
