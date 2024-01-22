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




const url = 'https://currency-converter18.p.rapidapi.com/api/v1/convert?from=EUR&to=KWD&amount=10';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0c84b4802amsh669d15d5e5d8739p13d073jsnd008c486b220',
		'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}