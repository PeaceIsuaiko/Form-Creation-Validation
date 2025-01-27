document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Input elements
    const userName = document.getElementById('username');
    const userEmail = document.getElementById('email');
    const userPassword = document.getElementById('password');

    // Error message elements
    const userNameError = document.getElementById('usernameerror');
    const userEmailError = document.getElementById('useremailerror');
    const userPasswordError = document.getElementById('userpassworderror');

    // Initialize validation status and messages
    let isValid = true;
    let messages = [];

    // Username Validation
    if (userName.value.trim().length < 3 || userName.value.trim().length > 12) {
      const error = "Username must be between 3 and 12 characters.";
      userNameError.textContent = error;
      messages.push(error);
      isValid = false;
    } else {
      userNameError.textContent = "";
    }

    // Email Validation
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(userEmail.value.trim())) {
      const error = "Invalid email format.";
      userEmailError.textContent = error;
      messages.push(error);
      isValid = false;
    } else {
      userEmailError.textContent = "";
    }

    // Password Validation
    if (userPassword.value.trim().length < 7) {
      const error = "Password must be at least 7 characters long.";
      userPasswordError.textContent = error;
      messages.push(error);
      isValid = false;
    } else {
      userPasswordError.textContent = "";
    }

    // Feedback display
    feedbackDiv.style.display = 'block';
    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
    }
  });
});
