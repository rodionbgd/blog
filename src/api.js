export async function getPosts() {
  let response;
  try {
    response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/?_limit=5"
    );
  } catch (e) {
    alert(e);
  }
  return response?.json();
}
