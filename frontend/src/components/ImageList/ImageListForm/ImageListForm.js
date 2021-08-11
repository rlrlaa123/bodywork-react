import React from "react";
import styled from "styled-components";

import ImageList from "../ImageList";
import Pagination from "../../Pagination/Pagination";

import store from "../../../store/store";

const BeforeAfterParagraph = styled.p`
  text-align: left;
  margin: 20px 50px;
`;

const ImageListForm = ({ url, type }) => {
  const pageNum = new RegExp("page=(.+?)").exec(url);

  return (
    <div>
      {type === "beforeAfter" ? (
        <BeforeAfterParagraph>
          포토샵없는 리얼 후기사진입니다.
        </BeforeAfterParagraph>
      ) : null}
      <ImageList
        itemData={
          pageNum === null
            ? store[type].slice(0, store.pagination)
            : store[type].slice(
                (pageNum[1] - 1) * store.pagination,
                (pageNum[1] - 1) * store.pagination + store.pagination
              )
        }
        itemDataKeys={Object.keys(store[type][0])}
      />
      <Pagination itemData={store[type]} length={store.pagination} />
    </div>
  );
};

export default ImageListForm;
