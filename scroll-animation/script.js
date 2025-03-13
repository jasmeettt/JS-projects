const contents = document.querySelectorAll(".content");

window.addEventListener("scroll", checkContent);

checkContent(); // screen par content dikhne ke liye, iske bina screen pe content nhi aate until and unless we scroll.

function checkContent() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  console.log(window.innerHeight);

  contents.forEach((content) => {
    const contentTop = content.getBoundingClientRect().top;

    if (contentTop < triggerBottom) {
      content.classList.add("show");
    } else {
      content.classList.remove("show");
    }
  });
}
