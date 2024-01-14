// Step1: Set up selector
const color = document.querySelector("#color");
const place = document.querySelector("#place");
const ritual = document.querySelector("#ritual");

// Step2: Implement logic
function handleFavoriteColor() {
    alert("Green is my favorite color");
}

function handleFavoritePlace() {
    alert("My favorite place is Switzerland");
}

function handleFavoriteRitual() {
    alert("My favorite ritual is red envelop, which related to Lunar New Year also known as Tet.");
}
// Step3: Add event listener
color.addEventListener("click", handleFavoriteColor);
place.addEventListener("click", handleFavoritePlace);
ritual.addEventListener("click", handleFavoriteRitual);