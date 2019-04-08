import React, { Component } from "react";
import { createImage } from "../actions/imageActions";
import { connect } from "react-redux";

class AddImage extends Component {
  constructor() {
    super();
    this.submitUrl = this.submitUrl.bind(this);
  }
  submitUrl(e) {
    e.preventDefault();
    let form = new FormData(e.target);
    const url = form.get("url");
    this.props.createImage(url);
  }
  render() {
    return (
      <form onSubmit={this.submitUrl}>
        <input
          type="text"
          name="url"
          placeholder="https://unsplash.com/photos/{photo_id}"
        />
        <input type="submit" />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createImage: url => dispatch(createImage(url))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(AddImage);
