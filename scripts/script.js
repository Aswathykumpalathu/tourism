
let email = document.getElementById("exampleInputEmail1");
let password = document.getElementById("exampleInputPassword1");


  email.addEventListener('input', function() {
    if (email.validity.typeMismatch) {
      email.setCustomValidity('Please enter a valid email address.');
    } else {
      email.setCustomValidity('');
    }
  });

 

  password.addEventListener('input', function() {
    // let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    console.log('password validation')
    // console.log(password.value)
    // console.log(passwordRegex.test(password.value))
    //
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    console.log(passwordRegex.test(password))
    if (!passwordRegex.test(password.value)) {
        password.setCustomValidity('Please enter a valid password with minimum 8 characters, at least one uppercase, and one lowercase, must contain at least one number.');
      } else {
        password.setCustomValidity('');
      }
  });

  password.addEventListener('keyup', function() {
    let passwordStrength = calculatePasswordStrength(password.value);
    // let passwordStrengthText = document.getElementById('password-strength');

    if (passwordStrength >= 66) {
      password.style.borderColor = 'green';
      // passwordStrengthText.innerText = 'Strong';
      // passwordStrengthText.style.color = 'green';
    } else if (passwordStrength >= 33) {
      password.style.borderColor = 'orange';
      // passwordStrengthText.innerText = 'Medium';
      // passwordStrengthText.style.color = 'orange';
    } else {
      password.style.borderColor = 'red';
      // passwordStrengthText.innerText = 'Poor';
      // passwordStrengthText.style.color = 'red';
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

