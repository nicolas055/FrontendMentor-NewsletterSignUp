// Get elements from html
let card = document.getElementById('card');
let inputEmail = document.getElementById('input-email');
let emailErrorMsg = document.getElementById('email-error--message');
let emailBtn = document.getElementById('email-btn');
let cardSuccess = document.getElementById('card-success');
let dismissBtn = document.getElementById('dismiss-btn');
let userEmail = document.querySelector('.card.success p span');

// Email Regex
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// Functions
function validEmail() {
    // If the email input is empty or invalid, show a error message
    if (inputEmail.value === '' || emailRegex.test(inputEmail.value) === false) {
        inputEmail.classList.add('error-state');
        emailErrorMsg.classList.remove('none')
    } else {
        // Show the success page
        card.classList.add('none');
        cardSuccess.classList.remove('none');

        // Show the user email in the success message
        userEmail.innerHTML = inputEmail.value;
    }
    // Empty the email input
    inputEmail.value = '';
}

// Event Listeners
// Make the input email back to normal style when clicking on it
inputEmail.addEventListener("click", () => {
    emailErrorMsg.classList.add('none');
    inputEmail.classList.remove('error-state');
})
// Add an event listener to the subscribe button
emailBtn.addEventListener("click", validEmail);

// Reload the page when clicking on the dismiss button
dismissBtn.addEventListener("click", () => {
    location.reload();
})

