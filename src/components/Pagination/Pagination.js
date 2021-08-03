import React from "react";
import { PaginationItem, PaginationLink } from "reactstrap";
import { Pagination as PaginationComponent } from "reactstrap";
import { Link } from "react-router-dom";

import "./Pagination.css";

class Pagination extends React.Component {
  render() {
    const { itemData, length } = this.props;
    const pagination = () => {
      const result = [];
      for (let i = 1; i <= itemData.length / length; i++) {
        result.push(
          <PaginationItem key={i}>
            <Link to={"?page=" + i}>
              <PaginationLink>{i}</PaginationLink>
            </Link>
          </PaginationItem>
        );
      }
      return result;
    };

    return (
      <PaginationComponent size="lg" aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink first href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        {pagination()}
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last href="#" />
        </PaginationItem>
      </PaginationComponent>
    );
  }
}

export default Pagination;
