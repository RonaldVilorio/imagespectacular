import React, { Component } from "react";
import ImageList from "../components/ImageList";
import SearchBar from "../components/SearchBar";

class ImagesContainer extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ImageList />
      </div>
    );
  }
}
export default ImagesContainer;
