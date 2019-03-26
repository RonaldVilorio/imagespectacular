import React, { Component } from "react";
class Image extends Component {
  render() {
    const { image } = this.props;
    return (
      <div>
        <img src={image.url} alt={image.description} />
      </div>
    );
  }
}
export default Image;
