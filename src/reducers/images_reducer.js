export const imagesReducer = (state = { images: [] }, action) => {
  switch (action.type) {
    case "LOADING_IMAGES":
      return { ...state, loading: true };
    case "FETCH_IMAGES":
      return { ...state, loading: false, images: action.payload };
    case "CREATE_IMAGE":
      return { ...state, loading: false, image: action.payload };
    default:
      return state;
  }
};
