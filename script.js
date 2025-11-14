const myForm = document.getElementById('registrationForm');
const nameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passInput = document.getElementById('password');
const passConfirm = document.getElementById('confirmPassword') 

const nameError = document.getElementById('usernameError')
const emailError = document.getElementById('emailError')
const passError = document.getElementById('passwordError')
const passConfirmError = document.getElementById('confirmPasswordError')

const statusMessage = document.getElementById('statusMessage');

const savedUsername = localStorage.getItem('savedUsername')
if (savedUsername) {
    nameInput.value = savedUsername;
    console.log("Loading Sexy User", savedUsername)
}

window.addEventListener('DOMContentLoaded', function () {
    const savedUsername = localStorage.getItem('savedUsername')

    if ('savedUsername') {
        usernameInput.value = savedUsername;
        console.log('Prefilled username', savedUsername);
    }

usernameInput.addEventListener('input', validateUsername);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', varlidatePassword)
confirmPasswordInput.addEventListener('input', validateConfirmPassword);


function validateUsername() {
    const username = usernameInput.value.trim();

    if (usernameInput.validity.valueMissing) {
        showError(usernameError, "Username is required");
        return false;
    }
     else if (usernameInput.validity.tooShort) {
        showError(usernameError, "Aye bruh, say bruh...u need at least 3 characters")
        return false;
     }

     else {
        clearError(usernameError)
        return true
     }

}

function

});

