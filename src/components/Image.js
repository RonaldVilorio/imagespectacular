import React, { Component } from "react";
class Image extends Component {
  render() {
    const { image } = this.props;
    return (
      <div>
        <h3>{image.title}</h3>
        <h3>{image.description}</h3>
        <h3>{image.category}</h3>
        <img src={image.url} alt={image.description} />
        <p>{image.owner}</p>
      </div>
    );
  }
}
export default Image;
