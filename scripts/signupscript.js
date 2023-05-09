const emailField = document.getElementById('email');
const phoneField = document.getElementById('phone');
const passwordField = document.getElementById('password');

  emailField.addEventListener('input', function() {
    if (emailField.validity.typeMismatch) {
      emailField.setCustomValidity('Please enter a valid email address.');
    } else {
      emailField.setCustomValidity('');
    }
  });

  phoneField.addEventListener('input', function() {
    let phoneRegex = /^(\d{3}[.-\s]?){2}\d{4}$/;
    console.log('form field validation')
    console.log(phoneRegex.test(phoneField.value))
    if (!phoneRegex.test(phoneField.value)) {
      phoneField.setCustomValidity('Please enter a valid phone number.');
    } else {
      phoneField.setCustomValidity('');
     }
  });

  passwordField.addEventListener('input', function() {
    let passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    
    if (!passwordRegex.test(passwordField.value)) {
      passwordField.setCustomValidity('Please enter a valid password with minimum 8 characters, at least one uppercase, and one lowercase, must contain at least one number.');
    } else {
      passwordField.setCustomValidity('');
    }
  });

  passwordField.addEventListener('keyup', function() {
    let passwordStrength = calculatePasswordStrength(passwordField.value);
    let passwordStrengthText = document.getElementById('password-strength');

    if (passwordStrength >= 66) {
      passwordField.style.borderColor = 'green';
      passwordStrengthText.innerText = 'Strong';
      passwordStrengthText.style.color = 'green';
    } else if (passwordStrength >= 33) {
      passwordField.style.borderColor = 'orange';
      passwordStrengthText.innerText = 'Medium';
      passwordStrengthText.style.color = 'orange';
    } else {
      passwordField.style.borderColor = 'red';
      passwordStrengthText.innerText = 'Poor';
      passwordStrengthText.style.color = 'red';
    }
  });

  function calculatePasswordStrength(password) {
    let passwordStrength = 0;
    if (password.length >= 8) {
      passwordStrength += 25;
    }
    if (password.match(/[a-z]+/)) {
      passwordStrength += 25;
    }
    if (password.match(/[A-Z]+/)) {
      passwordStrength += 25;
    }
    if (password.match(/[0-9]+/)) {
      passwordStrength += 25;
    }
    return passwordStrength;
  }