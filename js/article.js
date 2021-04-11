fetch("https://s21kea-d06b.restdb.io/rest/posts/60728f1f22a6f434000942ed", {
  method: "GET",
  headers: {
    "x-apikey": "6033bd605ad3610fb5bb64f6",
  },
})
  .then((res) => res.json())
  .then((response) => {
    showPost(response);
  })
  .catch((err) => {
    console.error(err);
  });

function showPost(data) {
  console.log(data);

  document.querySelector("h1").textContent = data.title;
  document.querySelector("h2 span").textContent = data.username;
  document.querySelector("p").textContent = data.content;
}
