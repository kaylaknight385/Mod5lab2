const myForm = document.getElementById(registrationForm);
const nameInput = document.getElementById(username);
const emailInput = document.getElementById(email);
const passInput = document.getElementById(password);
const passConfirm = document.getElementById(confirmPassword) 

const nameError = document.getElementById(usernameError)
const emailError = document.getElementById(emailError)
const passError = document.getElementById(passwordError)
const passConfirmError = document.getElementById(confirmPasswordError)




window.addEventListener(function () {
    const savedInput = localStorage.getItem('username')

    if ('savedInput') {
        nameinput.value = savedInput;
        console.log('Prefilled username', savedInput)
    }
});

