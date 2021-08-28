import React, { useRef, useEffect } from "react";

import { Table, Input } from "reactstrap";
import styled from "styled-components";

import Quill from "quill";
import "quill/dist/quill.bubble.css";

const StyledTr = styled.tr`
  cursor: initial;
`;

const StyledTh = styled.th`
  vertical-align: middle !important;
`;

const QuillWrapper = styled.div`
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  overflow: scroll;
  /* 최소 크기 지정 및 padding 제거 */
  .ql-editor {
    max-height: 600px;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;

const Editor = ({ pathname, type, onChangeField }) => {
  const quillElement = useRef(null); // Quill을 적용할 DivElement를 설정
  const quillInstance = useRef(null); // Quill 인스턴스를 설정

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: "bubble",
      modules: {
        // 더 많은 옵션
        // https://quilljs.com/docs/modules/toolbar/ 참고
        toolbar: [
          [{ header: "1" }, { header: "2" }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["blockquote", "code-block", "link", "image"],
        ],
      },
    });

    // quill에 text-change 이벤트 핸들러 등록
    // 참고: https://quilljs.com/docs/api/#events
    const quill = quillInstance.current;
    quill.on("text-change", (delta, oldDelta, source) => {
      // console.log(quill.root.innerHTML);
      onChangeField({ key: "body", value: quill.root.innerHTML });
    });
  }, [onChangeField]);

  const onChangeInput = (e) => {
    // console.log(e.target.name, e.target.value);
    onChangeField({ key: e.target.name, value: e.target.value });
  };

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
              <Input name="author" onChange={onChangeInput} />
            </td>
            <StyledTh>이메일</StyledTh>
            <td>
              <Input name="email" onChange={onChangeInput} />
            </td>
          </StyledTr>
          <StyledTr>
            <StyledTh>비밀번호</StyledTh>
            <td>
              <Input type="password" name="password" onChange={onChangeInput} />
            </td>
            <StyledTh>비밀번호 확인</StyledTh>
            <td>
              <Input type="password" name="passwordConfirm" />
            </td>
          </StyledTr>
          <StyledTr>
            <StyledTh>제목</StyledTh>
            <td colSpan="3">
              <Input name="title" onChange={onChangeInput} />
            </td>
          </StyledTr>
          <StyledTr>
            <StyledTh>내용</StyledTh>
            <td colSpan="3">
              <QuillWrapper ref={quillElement} rows="20">
                <p>
                  {
                    "아래의 양식에 맞게 문의주시면 친절히 답변 도와드리도록 하겠습니다."
                  }
                </p>
                <br />
                <p>{"감사합니다."}</p>
                <br />
                <p>{"-----레슨문의-----"}</p>
                <br />
                <p>{"희망지점 :"}</p>
                <br />
                <p>{"이름 :"}</p>
                <br />
                <p>{"나이 :"}</p>
                <br />
                <p>{"연락처 :"}</p>
                <br />
                <p>{"성별 :"}</p>
                <br />
                <p>{"운동 목적 :"}</p>
                <br />
                <p>{"운동 가능한 시간 :"}</p>
                <br />
                <p>{"문의사항 :"}</p>
              </QuillWrapper>
            </td>
          </StyledTr>
        </tbody>
      </Table>
    </div>
  );
};

export default Editor;
