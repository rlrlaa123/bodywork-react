import React, { useEffect } from "react";
import qs from "qs";
import DashBoardForm from "../../../components/Dashboard/DashBoardForm/DashBoardForm";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listLessons } from "../../../modules/lessons/lessons";

const LessonsListContainer = ({ location, type }) => {
  const dispatch = useDispatch();
  const { lessons, error, loading } = useSelector(({ lessons, loading }) => ({
    lesson: lessons.lessons,
    error: lessons.error,
    loading: loading["lessons/LIST_LESSONS"],
  }));

  useEffect(() => {
    const { page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listLessons({ page }));
  }, [dispatch, location.search]);

  return (
    <DashBoardForm
      response={lessons}
      loading={loading}
      error={error}
      type={type}
    />
  );
};

export default withRouter(LessonsListContainer);
