import React from "react";
import Container from "@material-ui/core/Container";
import banner1 from "../../assets/banner1.jpeg";
import CoverImage from "../../components/common/CoverImage/CoverImage";
import MenuTitle from "../../components/common/MenuTitle/MenuTitle";

class CEO extends React.Component {
  render() {
    return (
      <div>
        <CoverImage image={banner1} />
        <Container>
          <MenuTitle title={"CEO 소개"} />
        </Container>
      </div>
    );
  }
}

export default CEO;
