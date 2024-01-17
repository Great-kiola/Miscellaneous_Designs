let startBtn = document.querySelector("#startBtn");
let vertical = document.querySelectorAll(".vertical");
let modal = document.querySelector(".moreModal");
let stopDiv = document.querySelector(".stopDiv");

var timer;

startBtn.addEventListener("click", () => {
    var sec = 18;
    stopDiv.style.display = "block";

    timer = setInterval(function(){
        let secs = document.querySelector('.secs');

        secs.innerText = ":" + sec;
        sec--;

        if (sec <= 0) {
            clearInterval(timer);
            stopDiv.style.display = "none";
        }
        
        if (sec <= 9 ){
            document.querySelector('.secs').innerText = ":0" + sec;
            secs.style.color("#e63946")
        }

    }, 1000);
});


stopDiv.addEventListener("click" , () => {
    clearInterval(timer);
    document.querySelector('.secs').innerText = ":00";
    stopDiv.style.display = "none";
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





