function getdata() {
  fetch("https://s21kea-d06b.restdb.io/rest/posts", {
    method: "GET",
    headers: {
      "x-apikey": "6033bd605ad3610fb5bb64f6",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      showPosts(response);
    })
    .catch((err) => {
      console.error(err);
    });
}
getdata();

function showPosts(posts) {
  console.log(posts);
  //grab the template
  const template = document.querySelector("#frontpage-list").content;

  posts.forEach((post) => {
    console.log(post);

    //clone
    const copy = template.cloneNode(true);

    //adjust stuff
    copy.querySelector("h2.post-title-front").textContent = post.title;
    copy.querySelector(
      "h3.post-author-front"
    ).textContent = `by ${post.username}`;
    copy.querySelector(
      "a.readmore-link"
    ).href = `article.html?article=${post._id}`;
    copy.querySelector(".readmore-button span").textContent = `Read More`;

    //append
    document.querySelector(".post-wrapper").appendChild(copy);
  });
}
