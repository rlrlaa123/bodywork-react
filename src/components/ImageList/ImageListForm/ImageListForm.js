import React from "react";

import ImageList from "../ImageList";
import Pagination from "../../Pagination/Pagination";

import store from "../../../store/store";

const ImageListForm = ({ url }) => {
  const pageNum = new RegExp("page=(.+?)").exec(url);

  return (
    <div>
      <ImageList
        itemData={
          pageNum === null
            ? store["alliance"].slice(0, store.pagination)
            : store["alliance"].slice(
                (pageNum[1] - 1) * store.pagination,
                (pageNum[1] - 1) * store.pagination + store.pagination
              )
        }
        itemDataKeys={Object.keys(store["alliance"][0])}
      />
      <Pagination itemData={store["alliance"]} length={store.pagination} />
    </div>
  );
};

export default ImageListForm;
