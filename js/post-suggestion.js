const form = document.querySelector(".submit-form");

form.elements.title.addEventListener("keyup", (e) => {
  if (e.target.value.length > 25) {
    form.elements.username.focus();
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
