import React from "react";
import "./ImageList.css";

class ImageList extends React.Component {
  render() {
    const { itemData } = this.props;

    return (
      <div className="imageList-wrapper">
        {itemData.map((item, idx) => {
          return (
            <div key={idx} className="imageList-container">
              <a href={item.link}>
                <img src={item.img} alt={item.title} />
                <p>{item.title}</p>
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ImageList;
