let startBtn = document.querySelector("#startBtn");
let vertical = document.querySelectorAll(".vertical");
let modal = document.querySelector(".moreModal");
let stopDiv = document.querySelector(".stopDiv");

var timer;

startBtn.addEventListener("click", () => {
    var sec = 30;
    stopDiv.style.display = "block";

    timer = setInterval(function(){
        document.querySelector('.secs').innerText = ":" + sec;
        sec--;

        if (sec <= 0) {
            clearInterval(timer);
        }
        
        if (sec <= 9 ){
            document.querySelector('.secs').innerText = ":0" + sec;
        }

    }, 1000);
});


stopDiv.addEventListener("click" , () => {
    clearInterval(timer);
    document.querySelector('.secs').innerText = ":00";
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





