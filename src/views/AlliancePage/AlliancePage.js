import React from "react";
import PageTemplate from "../../components/common/PageTemplate/PageTemplate";
import ImageListForm from "../../components/ImageList/ImageListForm/ImageListForm";
import banner from "../../assets/banner1.jpeg";

const AlliancePage = (props) => {
  return (
    <PageTemplate title="제휴업체" image={banner}>
      <ImageListForm url={props.location.search} />
    </PageTemplate>
  );
};

export default AlliancePage;
