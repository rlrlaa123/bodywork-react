import React from "react";

import { Table } from "reactstrap";
import styled from "styled-components";

const StyledTBody = styled.tbody`
  text-align: left;
`;

const StyledTr = styled.tr`
  cursor: initial;
`;

const StyledTh = styled.th`
  text-align: center;
  background-color: #f6f6f6;
  vertical-align: middle !important;
`;

const StyledTd = styled.td`
  vertical-align: middle !important;
`;

const DashBoardShowForm = ({ response, error, loading, type }) => {
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

  const { title, body, author, email, view, reply, publishedDate } = response;

  return (
    <div>
      <Table bordered responsive>
        <colgroup>
          <col width="25%" />
          <col width="25%" />
          <col width="25%" />
          <col width="25%" />
        </colgroup>
        <StyledTBody>
          <StyledTr>
            <StyledTh>제목</StyledTh>
            <StyledTd colSpan="3">{title}</StyledTd>
          </StyledTr>
          <StyledTr>
            <StyledTh>이름</StyledTh>
            <StyledTd>{author}</StyledTd>
            <StyledTh>이메일</StyledTh>
            <StyledTd>{email}</StyledTd>
          </StyledTr>
          <StyledTr>
            <StyledTh>조회수</StyledTh>
            <StyledTd>{view}</StyledTd>
            <StyledTh>등록일</StyledTh>
            <StyledTd>{new Date(publishedDate).toLocaleDateString()}</StyledTd>
          </StyledTr>
          <StyledTr>
            <StyledTh>내용</StyledTh>
            <StyledTd colSpan="3" dangerouslySetInnerHTML={{ __html: body }} />
          </StyledTr>
          <StyledTr>
            <StyledTh>{type === "lesson" ? "답변" : "첨부파일"}</StyledTh>
            <StyledTd colSpan="3">{type === "lesson" ? reply : ""}</StyledTd>
          </StyledTr>
        </StyledTBody>
      </Table>
    </div>
  );
};

export default DashBoardShowForm;
