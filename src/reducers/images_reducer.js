export default function imagesReducer(state = { images: [] }, action) {
  switch (action.type) {
    case "FETCH_CATS":
      return { images: action.payload };
    default:
      return state;
  }
}
