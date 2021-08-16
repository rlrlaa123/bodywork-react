import React from "react";
// import styled from "styled-components";
import { Link } from "react-router-dom";

import Table from "../../../components/common/Table/Table";
import Pagination from "../../../components/Pagination/Pagination";
import { Button } from "reactstrap";
import store from "../../../store/store";

// const StyledButton = styled.button`
//   float: right;
//   margin-right: 20px;
// `;

const filterArray = ["content", "email", "name", "reply"];

const DashBoardForm = ({ url, history, type }) => {
  const pageNum = new RegExp("page=(.+?)").exec(url);
  const itemDataKeys = Object.keys(store[type][0]).filter((ele) => {
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
          pageNum === null
            ? store[type].slice(0, store.pagination)
            : store[type].slice(
                (pageNum[1] - 1) * store.pagination,
                (pageNum[1] - 1) * store.pagination + store.pagination
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
