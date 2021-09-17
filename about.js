console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Submitted!")
}

function handleImage(evt) {
	alert('refer to compliments list')
}


let form = document.querySelector('form#contact');
let img = document.querySelector('img')

form.addEventListener('submit', handleSubmit);
img.addEventListener('mouseover', handleImage)