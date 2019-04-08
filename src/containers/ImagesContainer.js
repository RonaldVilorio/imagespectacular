import React, { Component } from "react";
import ImageList from "../components/ImageList";
import SearchBar from "../components/SearchBar";
import { connect } from "react-redux";
import { fetchImages } from "../actions/imageActions";

class ImagesContainer extends Component {
  componentDidMount() {
    this.props.fetchImages();
  }
  render() {
    const { images, filter } = this.props;
    let filteredImages = images;
    if (filter) {
      filteredImages = images.filter(image => image.category === filter);
    }

    return (
      <div>
        <SearchBar />
        {filteredImages.length > 0 ? (
          <ImageList images={filteredImages} />
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { images: state.images };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchImages: () => dispatch(fetchImages())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImagesContainer);
