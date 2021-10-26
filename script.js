const form = document.getElementById('form')
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name')
const email = document.getElementById('email-address')
const password = document.getElementById('password')


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
    const fnameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim()
    const passwordValue = email.value.trim()

    
    if (fnameValue === '' ) {
        setErrorFor(firstName);
    } else {
        setSuccessFor(firstName);
    }
    if (lastNameValue === '' ) {
        setErrorFor(lastName)
    } else {
        setSuccessFor(lastName);
    }
    if (emailValue === '' ) {
        setErrorFor(email)
    } else {
        setSuccessFor(email);
    }
    if (passwordValue === '' ) {
        setErrorFor(password)
    } else {
        setSuccessFor(password);
    }
}

function setErrorFor(input) {
    const inputForm = input.parentElement;
    inputForm.className = 'input-form error';
}

function setSuccessFor(input) {
    form.submit();
}