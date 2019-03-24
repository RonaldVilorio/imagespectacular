export async function fetchImages() {
  const resp = await fetch("/api/images");
  const images = await resp.json();
  return { type: "FETCH_CATS", payload: images };
}
