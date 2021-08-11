import React from "react";
import PageTemplate from "../../components/common/PageTemplate/PageTemplate";
import ImageListForm from "../../components/ImageList/ImageListForm/ImageListForm";
import banner from "../../assets/banner3.png";

const BeforeAfterPage = (props) => {
  return (
    <PageTemplate title="Before & After" image={banner}>
      <ImageListForm url={props.location.search} type="beforeAfter" />
    </PageTemplate>
  );
};

export default BeforeAfterPage;
