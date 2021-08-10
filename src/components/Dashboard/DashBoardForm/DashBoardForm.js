import React from "react";

import Table from "../../../components/common/Table/Table";
import Pagination from "../../../components/Pagination/Pagination";

import store from "../../../store/store";

const DashBoardForm = ({ url, history, type }) => {
  const pageNum = new RegExp("page=(.+?)").exec(url);

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
        itemDataKeys={Object.keys(store[type][0])}
        history={history}
      />
      <Pagination itemData={store[type]} length={store.pagination} />
    </div>
  );
};

export default DashBoardForm;
