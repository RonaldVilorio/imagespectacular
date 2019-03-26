import React, { Component } from "react";
import Image from "./Image";
class ImageList extends Component {
  render() {
    const { images } = this.props;
    const renderImages = images.map(image => (
      <Image key={image.id} image={image} />
    ));
    return <div>{renderImages}</div>;
  }
}
export default ImageList;
