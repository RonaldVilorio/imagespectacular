export const fetchImages = () => {
  return dispatch => {
    dispatch({ type: "LOADING_IMAGES" });
    fetch("/api/images")
      .then(resp => resp.json())
      .then(images => dispatch({ type: "FETCH_IMAGES", payload: images }));
  };
};
export const createImage = url => {
  return dispatch => {
    dispatch({ type: "CREATE_IMAGE" });
    let body = {
      image: {
        url: url,
        owner: "testing",
        category: "nature",
        description: "testing"
      }
    };

    fetch("/api/images", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
  };
};
