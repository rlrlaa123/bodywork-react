import React from "react";
import Container from "@material-ui/core/Container";

import MenuTitle from "../../components/MenuTitle/MenuTitle";
import Table from "../../components/Table/Table";
import Pagination from "../../components/Pagination/Pagination";
import itemData from "./itemData";

import "./Notice.css";

class Notice extends React.Component {
  render() {
    var pageNum = new RegExp("page=(.+?)").exec(this.props.location.search);

    return (
      <Container>
        <MenuTitle title={"공지사항"} />
        <Table
          itemData={pageNum === null ? itemData[0] : itemData[pageNum[1] - 1]}
        />
        <Pagination itemData={itemData} />
      </Container>
    );
  }
}

export default Notice;
