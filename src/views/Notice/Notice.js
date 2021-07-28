import React from "react";
import Container from "@material-ui/core/Container";

import CoverImage from "../../components/CoverImage/CoverImage";
import MenuTitle from "../../components/MenuTitle/MenuTitle";
import Table from "../../components/Table/Table";
import Pagination from "../../components/Pagination/Pagination";
import itemData from "./itemData";
import banner1 from "../../assets/banner2.png";
import "./Notice.css";

class Notice extends React.Component {
  render() {
    var pageNum = new RegExp("page=(.+?)").exec(this.props.location.search);

    return (
      <div>
        <CoverImage image={banner1} />
        <Container>
          <MenuTitle title={"공지사항"} />
          <Table
            itemData={pageNum === null ? itemData[0] : itemData[pageNum[1] - 1]}
            history={this.props.history}
          />
          <Pagination itemData={itemData} />
        </Container>
      </div>
    );
  }
}

export default Notice;
