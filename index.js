console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Successfully Submitted");
}

function photoCompliment() {
	alert("You look great today!");
}

const photo = document.querySelector('#photo');
let form = document.querySelector('#contact');

photo.addEventListener('mouseover', photoCompliment);
form.addEventListener('submit', handleSubmit);