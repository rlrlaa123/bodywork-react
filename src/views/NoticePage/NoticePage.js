import React from "react";
import PageTemplate from "../../components/common/PageTemplate/PageTemplate";
import DashBoardForm from "../../components/Dashboard/DashBoardForm/DashBoardForm";
import banner from "../../assets/banner2.png";

const NoticePage = (props) => {
  return (
    <PageTemplate title="공지사항" image={banner} type="dashboard">
      <DashBoardForm
        url={props.location.search}
        history={props.history}
        type="notice"
      />
    </PageTemplate>
  );
};

export default NoticePage;
