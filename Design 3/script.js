console.log("Hello world!");

let coin = document.querySelectorAll(".coin");
let coinModal = document.querySelector(".coin-modal");




coin.forEach((coins) => {
    coins.addEventListener("click", () => {
        // coinModal.style.display = "flex";
        coinModal.classList.toggle("active");
    });
    
})

// coin.addEventListener("mouseleave", () => {
//     coinModal.style.display = "none";
// });