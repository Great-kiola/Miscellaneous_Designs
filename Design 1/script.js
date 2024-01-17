let startBtn = document.querySelector("#startBtn");
let vertical = document.querySelectorAll(".vertical");
let modal = document.querySelector(".moreModal");

startBtn.addEventListener("click", () => {
  //   alert("Working!");
  function timer() {
    var sec = 30;
    
    var timer = setInterval(function () {
      document.querySelector(".secs").innerText = ":" + sec;
      sec--;
      if (sec < 0) {
        clearInterval(timer);
      }

    }, 1000);
  }

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
