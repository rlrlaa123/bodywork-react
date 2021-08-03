import React from "react";
import Container from "@material-ui/core/Container";

import CoverImage from "../../components/CoverImage/CoverImage";
import MenuTitle from "../../components/MenuTitle/MenuTitle";
import Table from "../../components/Table/Table";
import Pagination from "../../components/Pagination/Pagination";
import banner1 from "../../assets/banner2.png";
import "./Notice.css";
import store from "../../store/store";

class Notice extends React.Component {
  render() {
    var pageNum = new RegExp("page=(.+?)").exec(this.props.location.search);

    return (
      <div>
        <CoverImage image={banner1} />
        <Container>
          <MenuTitle title={"공지사항"} />
          <Table
            itemData={
              pageNum === null
                ? store["notice"].slice(0, store.pagination)
                : store["notice"].slice(
                    (pageNum[1] - 1) * store.pagination,
                    (pageNum[1] - 1) * store.pagination + store.pagination
                  )
            }
            itemDataKeys={Object.keys(store["notice"][0])}
            history={this.props.history}
          />
          <Pagination itemData={store["notice"]} length={store.pagination} />
        </Container>
      </div>
    );
  }
}

export default Notice;
