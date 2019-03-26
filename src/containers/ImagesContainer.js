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
    const { images } = this.props;
    return (
      <div>
        <SearchBar />
        {images.length > 0 ? <ImageList images={images} /> : null}
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
