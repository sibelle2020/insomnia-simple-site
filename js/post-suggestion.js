const form = document.querySelector(".submit-form");

form.elements.title.addEventListener("keyup", (e) => {
  if (e.target.value.length > 25) {
    form.elements.username.focus();
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const payload = {
    title: form.elements.title.value,
    username: form.elements.username.value,
    content: form.elements.content.value,
  };

  document.querySelector("input[type=submit]").disabled = true;

  fetch("https://s21kea-d06b.restdb.io/rest/posts", {
    method: "POST",
    headers: {
      "x-apikey": "6033bd605ad3610fb5bb64f6",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      console.log(response);

      document.querySelector("input[type=submit]").disabled = false;
      form.elements.title.value = "";
      form.elements.username.value = "";
      form.elements.content.value = "";
      document.querySelector("p.thankyou").classList.remove("hidden");
    })
    .catch((err) => {
      console.error(err);
    });
});
