import React from "react";
import Container from "@material-ui/core/Container";

import MenuTitle from "../../components/common/MenuTitle/MenuTitle";
import ImageList from "../../components/ImageList/ImageList";
import Pagination from "../../components/Pagination/Pagination";
import store from "../../store/store";

import "./Alliance.css";

class Alliance extends React.Component {
  render() {
    var pageNum = new RegExp("page=(.+?)").exec(this.props.location.search);

    return (
      <Container>
        <MenuTitle title={"제휴업체"} />
        <Container className={"root"}>
          <ImageList
            itemData={
              pageNum === null
                ? store["alliance"].slice(0, store.pagination)
                : store["alliance"].slice(
                    (pageNum[1] - 1) * store.pagination,
                    (pageNum[1] - 1) * store.pagination + store.pagination
                  )
            }
            itemDataKeys={Object.keys(store["alliance"][0])}
          />
          <Pagination itemData={store["alliance"]} length={store.pagination} />
        </Container>
      </Container>
    );
  }
}

export default Alliance;
