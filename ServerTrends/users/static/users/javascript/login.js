function validateForm_login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Perform your validation here
    // For example, check if email and password are not empty
    if (email.trim() === "" || password.trim() === "") {
        // Display an error message or perform any necessary action
        alert("Please enter your email and password.");
        return false; // Prevent form submission
    }

    // If all validation passed, allow the form to submit
    return true;
}

// Event listener to prevent redirection if requirements are not met
document.getElementById("loginLink").addEventListener("click", function(event) {
    if (!validateForm_login()) {
        event.preventDefault(); // Prevent link redirection
    }
});