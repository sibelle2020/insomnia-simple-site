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
  const template = document.querySelector(".frontpage-list").content;

  posts.forEach((post) => {
    console.log(post);

    //clone
    const copy = template.cloneNode(true);

    //adjust stuff
    template.querySelector("h2").textContent = post.title;
    template.querySelector("h3").textContent = `by ${post.username}`;
    template.querySelector(
      "a.readmore"
    ).href = `article.html?article=${post._id}`;
    template.querySelector("a.readmore").textContent = `Read More`;

    //append
    document.querySelector("main").appendChild(copy);
  });
}
