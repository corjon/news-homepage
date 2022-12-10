const open = document.getElementById("open-menu");
const close = document.getElementById("close-menu");
const nav = document.querySelector("nav");
const grey = document.getElementById("grey");

open.addEventListener("click", () => {
  nav.classList.add("is-open");
  grey.classList.add("is-open");
});

close.addEventListener("click", () => {
  nav.classList.remove("is-open");
  grey.classList.remove("is-open");
});