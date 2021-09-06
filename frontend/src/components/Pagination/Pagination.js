import React from "react";
import styled from "styled-components";
import qs from "qs";
import { PaginationItem, PaginationLink } from "reactstrap";
import { Pagination as PaginationComponent } from "reactstrap";
import { Link } from "react-router-dom";

const PaginationBlock = styled.div`
  padding: 0px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const buildLink = ({ page }) => {
  const query = qs.stringify({ page });
  return `/lesson?${query}`;
};

const Pagination = ({ page, lastPage }) => {
  return (
    <PaginationComponent size="lg" aria-label="Page navigation example">
      <PaginationItem disabled={page === 1}>
        <Link to={page === 1 ? "#" : buildLink({ page: page - 1 })}>
          <PaginationLink previous />
        </Link>
      </PaginationItem>
      <PaginationBlock>{page}</PaginationBlock>
      <PaginationItem disabled={page === lastPage}>
        <Link to={page === lastPage ? "#" : buildLink({ page: page + 1 })}>
          <PaginationLink next />
        </Link>
      </PaginationItem>
    </PaginationComponent>
  );
};

export default Pagination;
