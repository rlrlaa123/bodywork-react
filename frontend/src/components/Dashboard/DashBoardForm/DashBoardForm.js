import React from "react";
import qs from "qs";
import { Link } from "react-router-dom";

import Table from "../../../components/common/Table/Table";
import Pagination from "../../../components/Pagination/Pagination";
import { Button } from "reactstrap";
import store from "../../../store/store";

const filterArray = ["body", "email", "password", "reply", "__v"];

const DashBoardForm = ({ response, loading, error, url, history, type }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return <div>존재하지 않는 포스트입니다.</div>;
    }
    return <div>오류 발생!</div>;
  }

  // 로딩 중이거나 아직 포스트 데이터가 없을 때
  if (loading || !response) {
    console.log(error);
    return null;
  }

  const pageNum = qs.parse(url, {
    ignoreQueryPrefix: true,
  }).page;

  const itemDataKeys = Object.keys(response[0]).filter((ele) => {
    if (type === "lesson") {
      if (filterArray.indexOf(ele) !== -1) {
        return false;
      }
    }
    return ele;
  });

  return (
    <div>
      <Table
        itemData={
          pageNum === undefined
            ? response.slice(0, store.pagination)
            : response.slice(
                (pageNum - 1) * store.pagination,
                (pageNum - 1) * store.pagination + store.pagination
              )
        }
        itemDataKeys={itemDataKeys}
        history={history}
        type={type}
      />
      {type === "lesson" ? (
        <Link to={`/${type}/create`}>
          <Button style={{ float: "right", marginRight: "20px" }}>
            글쓰기
          </Button>
        </Link>
      ) : null}
      <Pagination itemData={store[type]} length={store.pagination} />
    </div>
  );
};

export default DashBoardForm;
