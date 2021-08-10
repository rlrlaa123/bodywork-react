import React from "react";
import PageTemplate from "../../components/common/PageTemplate/PageTemplate";
import DashBoardShowForm from "../../components/Dashboard/DashBoardShowForm/DashBoardShowForm";
import banner from "../../assets/banner2.png";

const NoticeShowPage = (props) => {
  return (
    <PageTemplate title="공지사항" image={banner} type="dashboard">
      <DashBoardShowForm pathname={props.location.pathname} type="notice" />
    </PageTemplate>
  );
};

export default NoticeShowPage;
