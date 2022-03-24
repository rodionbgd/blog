export async function getPosts(page, limit) {
  let response;
  try {
    response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
    );
  } catch (e) {
    alert(e);
  }
  const posts = await response.json();
  const totalPosts = response.headers.get("x-total-count");
  return { posts, totalPosts };
}
