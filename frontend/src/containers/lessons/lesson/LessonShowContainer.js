import React, { useEffect } from "react";
import DashBoardShowForm from "../../../components/Dashboard/DashBoardShowForm/DashBoardShowForm";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { readLesson, unloadLesson } from "../../../modules/lessons/lesson";

const LessonShowContainer = ({ match, type }) => {
  const { lessonId } = match.params;
  const dispatch = useDispatch();
  const { lesson, error, loading } = useSelector(({ lesson, loading }) => ({
    lesson: lesson.lesson,
    error: lesson.error,
    loading: loading["lesson/READ_LESSON"],
  }));

  useEffect(() => {
    // 처음 마운트될 때 포스트 읽기 API 요청
    dispatch(readLesson(lessonId));
    // 언마운트될 때 리덕스에서 포스트 데이터 없애기
    return () => {
      dispatch(unloadLesson());
    };
  }, [dispatch, lessonId]);

  return (
    <DashBoardShowForm
      response={lesson}
      loading={loading}
      error={error}
      type={type}
    />
  );
};

export default withRouter(LessonShowContainer);
