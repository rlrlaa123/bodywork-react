import React from "react";
import Container from "@material-ui/core/Container";

import MenuTitle from "../../components/MenuTitle/MenuTitle";
import ImageList from "../../components/ImageList/ImageList";
import Pagination from "../../components/Pagination/Pagination";
import itemData from "./itemData";

import "./Alliance.css";

class Alliance extends React.Component {
  render() {
    var pageNum = new RegExp("page=(.+?)").exec(this.props.location.search);
    return (
      <Container>
        <MenuTitle title={"제휴업체"} />
        <Container className={"root"}>
          <ImageList itemData={itemData[pageNum[1] - 1]} />
          <Pagination itemData={itemData} />
        </Container>
      </Container>
    );
  }
}

export default Alliance;
