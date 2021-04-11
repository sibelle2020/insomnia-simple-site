const searchParams = new URLSearchParams(window.location.search);
const articleId = searchParams.get("article");

fetch(
  "https://s21kea-d06b.restdb.io/rest/posts/" +
    articleId +
    "?fetchchildren=true",
  {
    method: "GET",
    headers: {
      "x-apikey": "6033bd605ad3610fb5bb64f6",
    },
  }
)
  .then((res) => res.json())
  .then((response) => {
    showPost(response);
  })
  .catch((err) => {
    console.error(err);
  });

function showPost(data) {
  console.log(data);

  document.querySelector(".title-post").textContent = data.title;
  document.querySelector(".author-post").textContent = `by ${data.username}`;
  document.querySelector("p.content-post").textContent = data.content;

  //grab the template
  const template = document.querySelector("#comments-template").content;

  //loop through comments
  data.comments.forEach((comment) => {
    //create a clone
    const copy = template.cloneNode(true);
    //populate

    copy.querySelector(".comment-username").textContent = comment.username;
    copy.querySelector(".comment-content").textContent = comment.content;

    //append it
    document.querySelector(".comment-list-wrapper").appendChild(copy);
  });
}
