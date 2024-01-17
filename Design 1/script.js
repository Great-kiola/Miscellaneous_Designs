let startBtn = document.querySelector("#startBtn");
let vertical = document.querySelectorAll(".vertical");
let modal = document.querySelector(".moreModal");

startBtn.addEventListener("click", () => {
  alert("Working!");
});


vertical.forEach((moreVertical) => {
  moreVertical.addEventListener("click", () => {
    if (modal.style.display === "none") {
      modal.style.display = "block";
    } else {
      modal.style.display = "none";
    }
  });
});
