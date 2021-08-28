import React from "react";

import { Table } from "reactstrap";
import styled from "styled-components";

import store from "../../../store/store";

const StyledTr = styled.tr`
  cursor: initial;
`;

const StyledTh = styled.th`
  background-color: #f6f6f6;
  vertical-align: middle !important;
`;

const DashBoardShowForm = ({ pathname, type }) => {
  var pageId = parseInt(new RegExp(`${type}/(.+?)`).exec(pathname)[1]) - 1;
  return (
    <div>
      <Table bordered responsive>
        <colgroup>
          <col width="25%" />
          <col width="25%" />
          <col width="25%" />
          <col width="25%" />
        </colgroup>
        <tbody>
          <StyledTr>
            <StyledTh>제목</StyledTh>
            <td colSpan="3">{store[type][pageId].title}</td>
          </StyledTr>
          <StyledTr>
            <StyledTh>조회수</StyledTh>
            <td>{store[type][pageId].view}</td>
            <StyledTh>등록일</StyledTh>
            <td>{store[type][pageId].created_at}</td>
          </StyledTr>
          <StyledTr>
            <StyledTh>내용</StyledTh>
            <td colSpan="3">{store[type][pageId].content}</td>
          </StyledTr>
          <StyledTr>
            <StyledTh>{type === "lesson" ? "답변" : "첨부파일"}</StyledTh>
            <td colSpan="3">
              {type === "lesson" ? store[type][pageId].reply : ""}
            </td>
          </StyledTr>
        </tbody>
      </Table>
    </div>
  );
};

export default DashBoardShowForm;
