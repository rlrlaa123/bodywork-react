import React from "react";
import "./CoverImage.css";

class CoverImage extends React.Component {
  render() {
    const { image } = this.props;

    return <img src={image} alt={"배너 이미지"} className={"cover-image"} />;
  }
}

export default CoverImage;
