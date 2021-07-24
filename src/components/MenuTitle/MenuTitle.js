import React from "react";
import "./MenuTitle.css";

class MenuTitle extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <div>
        <h3>{title}</h3>
        <hr />
      </div>
    );
  }
}

export default MenuTitle;
