import React from "react";

import { Table } from "reactstrap";
import styled from "styled-components";

import store from "../../../store/store";

const StyledTr = styled.tr`
  cursor: initial;
`;

const StyledTh = styled.th`
  background-color: #f6f6f6;
`;

const DashBoardShowForm = ({ pathname, type }) => {
  var pageId = parseInt(new RegExp("notice/(.+?)").exec(pathname)[1]) - 1;
  return (
    <div>
      <Table bordered responsive>
        <tbody>
          <StyledTr>
            <StyledTh>제목</StyledTh>
            <td colSpan="3">{store[type][pageId].title}</td>
          </StyledTr>
          <StyledTr>
            <StyledTh>조회수</StyledTh>
            <td width="30%">{store[type][pageId].view}</td>
            <StyledTh>등록일</StyledTh>
            <td>{store[type][pageId].created_at}</td>
          </StyledTr>
          <StyledTr>
            <StyledTh>내용</StyledTh>
            <td colSpan="3">{store[type][pageId].content}</td>
          </StyledTr>
          <StyledTr>
            <StyledTh>첨부파일</StyledTh>
            <td colSpan="3">{}</td>
          </StyledTr>
        </tbody>
      </Table>
    </div>
  );
};

export default DashBoardShowForm;
