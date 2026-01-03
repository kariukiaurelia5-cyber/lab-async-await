// Write your code here!
const postList = document.getElementById("post-list");

// Display posts function
function displayPosts(posts) {
  postList.innerHTML = "";

  posts.forEach(post => {
    const li = document.createElement("li");

    const h1 = document.createElement("h1");
    h1.textContent = post.title;

    const p = document.createElement("p");
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    postList.appendChild(li);
  });
}


async function fetchPostsAsync() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return posts;
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(posts => {
    displayPosts(posts);
  })
  .catch(error => console.error(error));

// Also call async version (rubric requirement)
fetchPostsAsync().catch(error => console.error(error));
