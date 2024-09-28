"use strict"
// Select input fields and error message spans
const username = document.getElementById('username');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const registerButton = document.getElementById('registerButton');
const successMessage = document.getElementById('successMessage');

// Function to validate required fields
function validateRequiredFields() {
    let isValid = true;

    // Username validation
    if (username.value.trim() === "") {
        usernameError.textContent = "Username is required";
        isValid = false;
    } else {
        usernameError.textContent = "";
    }

    // Password validation
    if (password.value.trim() === "") {
        passwordError.textContent = "Password is required";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    // Confirm Password validation
    if (confirmPassword.value.trim() === "") {
        confirmPasswordError.textContent = "Confirm password is required";
        isValid = false;
    } else {
        confirmPasswordError.textContent = "";
    }

    return isValid;
}

// Function to check if passwords match
function validatePasswordMatch() {
    let passwordsMatch = true;

    if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = "Passwords do not match";
        passwordsMatch = false;
    } else {
        confirmPasswordError.textContent = "";
    }

    return passwordsMatch;
}

// Function to enable or disable the Register button based on validation
function toggleRegisterButton() {
    if (validateRequiredFields() && validatePasswordMatch()) {
        registerButton.disabled = false;  // Enable button if everything is valid
    } else {
        registerButton.disabled = true;   // Disable button if something is invalid
    }
}

// Event listeners to validate inputs and toggle the button
username.addEventListener('input', toggleRegisterButton);
password.addEventListener('input', toggleRegisterButton);
confirmPassword.addEventListener('input', toggleRegisterButton);

// Event listener for Register button
registerButton.addEventListener('click', function () {
    if (validateRequiredFields() && validatePasswordMatch()) {
        successMessage.textContent = "User successfully registered!";
    } else {
        successMessage.textContent = "";
    }
});