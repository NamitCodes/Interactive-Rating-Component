const TYPContainer = document.getElementById("thankYouPage");

const ratingBtn = document.getElementsByClassName("rating");
const submitBtn = document.querySelector(".submit-btn");

const user = document.getElementById("user");

submitBtn.addEventListener("click", () => {
  TYPContainer.classList.remove("hidden");
  var nodes = TYPContainer.getElementsByTagName("div");
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].classList.remove("hidden");
  }
});

for (var i = 0; i < ratingBtn.length; i++) {
  ratingBtn[i].addEventListener("click", (e) => {
    user.textContent = e.target.value;
  });
}
