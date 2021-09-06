import React from "react";
import { Link } from "react-router-dom";

import Table from "../../../components/common/Table/Table";
import { Button } from "reactstrap";
import PaginationContainer from "../../../containers/lessons/lessons/PaginationContainer";

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
    // console.log(error);
    return null;
  }

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
        itemData={response}
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
      <PaginationContainer />
    </div>
  );
};

export default DashBoardForm;
