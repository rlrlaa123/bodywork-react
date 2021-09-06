import React from "react";
import Pagination from "../../../components/Pagination/Pagination";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import qs from "qs";

const PaginationContainer = ({ location }) => {
  const { lastPage, lessons, loading } = useSelector(
    ({ lessons, loading }) => ({
      lastPage: lessons.lastPage,
      lessons: lessons.lessons,
      loading: loading["lessons/LIST_LESSONS"],
    })
  );

  // 포스트 데이터가 없거나 로딩 중이면 아무것도 보여 주지 않음
  if (!lessons || loading) return null;

  // page가 없으면 1을 기본값으로 사용
  const { page = 1 } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  return <Pagination page={parseInt(page, 10)} lastPage={lastPage} />;
};

export default withRouter(PaginationContainer);
