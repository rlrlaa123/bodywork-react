import React from "react";
import Container from "@material-ui/core/Container";
import styled from "styled-components";

import MenuTitle from "../../components/common/MenuTitle/MenuTitle";
import { Table } from "reactstrap";
import "./NoticeShow.css";
import store from "../../store/store";

const StyledTr = styled.tr`
  cursor: initial;
`;

class NoticeShow extends React.Component {
  render() {
    var pageId =
      parseInt(
        new RegExp("notice/(.+?)").exec(this.props.location.pathname)[1]
      ) - 1;
    return (
      <div>
        <Container>
          <MenuTitle title={"공지사항"} />
          <Table bordered responsive>
            <tbody>
              <StyledTr>
                <th>제목</th>
                <td colSpan="3">{store["notice"][pageId].title}</td>
              </StyledTr>
              <StyledTr>
                <th>조회수</th>
                <td width="30%">{store["notice"][pageId].view}</td>
                <th>등록일</th>
                <td>{store["notice"][pageId].created_at}</td>
              </StyledTr>
              <StyledTr>
                <th>내용</th>
                <td colSpan="3">{store["notice"][pageId].content}</td>
              </StyledTr>
              <StyledTr>
                <th>첨부파일</th>
                <td colSpan="3">{}</td>
              </StyledTr>
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default NoticeShow;
