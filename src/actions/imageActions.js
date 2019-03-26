export const fetchImages = () => {
  return dispatch => {
    dispatch({ type: "LOADING_IMAGES" });
    fetch("/api/images")
      .then(resp => resp.json())
      .then(images => dispatch({ type: "FETCH_IMAGES", payload: images }));
  };
};
