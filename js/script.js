function send() {
    const input = document.querySelector('.input');
    const error = document.querySelector('.error');

    if(!validateEmail(input.value)) {
        input.style.borderColor = 'hsl(354, 100%, 66%)';
        error.style.display = 'block';
    }else{
        input.style.borderColor = 'hsl(223, 100%, 88%)';
        error.style.display = 'none';
        input.value = "";
    }
    
}
function validateEmail (email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}