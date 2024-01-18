let startBtn = document.querySelector("#startBtn");
let vertical = document.querySelectorAll(".vertical");
let modal = document.querySelector(".moreModal");
let stopDiv = document.querySelector(".stopDiv");
let awaiting = document.querySelector(".awaiting");
var timer;


// Confetti
const jsConfetti = new JSConfetti();

startBtn.addEventListener("click", () => {
    awaiting.innerHTML = "AWAITING";
    var sec = 10;
    stopDiv.style.display = "block";

    timer = setInterval(function(){
        let secs = document.querySelector('.secs');

        secs.innerText = ":" + sec;
        sec--;

        if (sec <= 0) {
            clearInterval(timer);
            stopDiv.style.display = "none";

            awaiting.innerHTML = "COMPLETED";

            jsConfetti.addConfetti({
                emojis: ['🎊', '🍀', '🎈'],
                emojiSize: 50,
                confettiNumber: 250,
            })
        }
        
        if (sec <= 9 ){
            document.querySelector('.secs').innerText = ":0" + sec;
        }

    }, 1000);
});


stopDiv.addEventListener("click" , () => {
    clearInterval(timer);
    document.querySelector('.secs').innerText = ":00";
    stopDiv.style.display = "none";
    awaiting.innerHTML = "STOPPED";
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



