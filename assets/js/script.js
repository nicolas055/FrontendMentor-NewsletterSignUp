// Get elements from html
let emailForm = document.getElementById('email-form');
let inputEmail = document.getElementById('input-email');
let emailErrorMsg = document.getElementById('email-error--message');



// Email Regex
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// Functions
function validEmail(e) {
    

    // If the email input is empty or invalid, show a error message
    if (inputEmail.value === '' || emailRegex.test(inputEmail.value) === false) {
        e.preventDefault();
        inputEmail.classList.add('error-state');
        emailErrorMsg.classList.remove('none')
        // Empty the email input
        inputEmail.value = '';
    } else {
        sessionStorage.setItem("email", inputEmail.value);
    }
    
    
    
}

// Event Listeners
// Add an event listener to the subscribe button
emailForm.addEventListener("submit", validEmail);

// Make the input email back to normal style when clicking on it
inputEmail.addEventListener("click", () => {
    emailErrorMsg.classList.add('none');
    inputEmail.classList.remove('error-state');
})


