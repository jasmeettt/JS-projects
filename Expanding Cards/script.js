const panel = document.querySelectorAll(".panel");

panel.forEach((panel) => {
  panel.addEventListener("click", function () {
    removeActiveClass();
    panel.classList.add("active");
  });
});

function removeActiveClass() {
  panel.forEach((panel) => {
    panel.classList.remove("active");
  });
}
