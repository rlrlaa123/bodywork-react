import React from "react";

import { Table, Input } from "reactstrap";
import styled from "styled-components";

const StyledTr = styled.tr`
  cursor: initial;
`;

const StyledTh = styled.th`
  vertical-align: middle !important;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
`;

const DashBoardShowForm = ({ pathname, type }) => {
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
            <StyledTh>이름</StyledTh>
            <td>
              <Input />
            </td>
            <StyledTh>이메일</StyledTh>
            <td>
              <Input />
            </td>
          </StyledTr>
          <StyledTr>
            <StyledTh>비밀번호</StyledTh>
            <td>
              <Input />
            </td>
            <StyledTh>비밀번호 확인</StyledTh>
            <td>
              <Input />
            </td>
          </StyledTr>
          <StyledTr>
            <StyledTh>제목</StyledTh>
            <td colSpan="3">
              <Input />
            </td>
          </StyledTr>
          <StyledTr>
            <StyledTh>내용</StyledTh>
            <td colSpan="3">
              <StyledTextArea
                type="text"
                rows="20"
                defaultValue={`아래의 양식에 맞게 문의주시면 친절히 답변 도와드리도록 하겠습니다.
감사합니다.

-----레슨문의-----

희망지점 :

이름 :

나이 :

연락처 :

성별 :

운동 목적 :

운동 가능한 시간 :

문의사항 :
`}
              />
            </td>
          </StyledTr>
        </tbody>
      </Table>
    </div>
  );
};

export default DashBoardShowForm;
