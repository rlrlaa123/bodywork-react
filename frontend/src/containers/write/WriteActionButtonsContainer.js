import React, { useEffect } from "react";
import WriteActionButtons from "../../components/Dashboard/write/WriteActionButtons";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { writeLesson } from "../../modules/lessons/write";

const WriteActionButtonsContainer = ({ history }) => {
  const dispatch = useDispatch();
  const {
    title,
    body,
    author,
    email,
    view,
    reply,
    password,
    lesson,
    lessonError,
  } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    author: write.author,
    email: write.email,
    password: write.password,
    view: write.view,
    reply: write.reply,
    lesson: write.lesson,
    lessonError: write.lessonError,
  }));

  // 포스트 등록
  const onPublish = () => {
    dispatch(
      writeLesson({
        title,
        body,
        author,
        email,
        view,
        reply,
        password,
      })
    );
  };

  // 취소
  const onCancel = () => {
    history.goBack();
  };

  // 성공 혹은 실패 시 할 작업
  useEffect(() => {
    if (lesson) {
      history.push("/lesson");
    }
    if (lessonError) {
      console.log(lessonError);
    }
  }, [history, lesson, lessonError]);
  return <WriteActionButtons onPublish={onPublish} onCancel={onCancel} />;
};

export default withRouter(WriteActionButtonsContainer);
