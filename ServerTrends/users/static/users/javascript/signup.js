function validateForm_signup() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Perform your validation here
    // For example, check if all fields are not empty and if passwords match
    if (fullName.trim() === "" || email.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
        // Display an error message or perform any necessary action
        alert("Please fill in all fields.");
        return false; // Prevent form submission
    }

    if (password !== confirmPassword) {
        // Display an error message or perform any necessary action
        alert("Passwords do not match.");
        return false; // Prevent form submission
    }

    // If all validation passed, allow the form to submit
    return true;
}

// Event listener to prevent redirection if requirements are not met
document.getElementById("signupLink").addEventListener("click", function(event) {
    if (!validateForm_signup()) {
        event.preventDefault(); // Prevent link redirection
    }
});
