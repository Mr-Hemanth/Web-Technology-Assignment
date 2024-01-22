document.addEventListener('DOMContentLoaded', function () {
    const homeSection = document.getElementById('home-section');
    const loginSection = document.getElementById('login-section');
    const signupSection = document.getElementById('signup-section');

    document.getElementById('login-section').style.display = 'none';
    document.getElementById('signup-section').style.display = 'none';

    document.getElementById('home-btn').addEventListener('click', function () {
        homeSection.style.display = 'flex';
        loginSection.style.display = 'none';
        signupSection.style.display = 'none';
    });

    document.getElementById('login-btn').addEventListener('click', function () {
        homeSection.style.display = 'none';
        loginSection.style.display = 'flex';
        signupSection.style.display = 'none';
    });

    document.getElementById('signup-btn').addEventListener('click', function () {
        homeSection.style.display = 'none';
        loginSection.style.display = 'none';
        signupSection.style.display = 'flex';
    });

    const registerForm = document.getElementById('register-form');
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('number').value.trim();
        const email = document.getElementById('email-reg').value.trim();
        const password = document.getElementById('password-reg').value;
        const confirmPassword = document.getElementById('password-reg3').value;

        let isValid = true;
        let errorMessage = '';

        if (!emailRegex.test(email)) {
            isValid = false;
            errorMessage += 'Please enter a valid email address.\n';
        }

        const phoneRegex = /^[6-9]\d{9}$/;
        if (!phoneRegex.test(phone)) {
            isValid = false;
            errorMessage += 'Please enter a valid Indian phone number.\n';
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\|:;<>,.]).{6,}$/;
        if (!passwordRegex.test(password)) {
            isValid = false;
            errorMessage += 'Password must have at least 6 characters, including one uppercase letter, one lowercase letter, and one special character.\n';
        }

        if (password !== confirmPassword) {
            isValid = false;
            errorMessage += 'Passwords do not match.\n';
        }

        if (isValid) {
            console.log('Registration successful!');
            registerForm.reset();
            displayAlert('success', 'Registration successful!');

            document.getElementById('login-btn').click();
        } else {
            displayAlert('error', errorMessage);
        }
    });

    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const messageElement = document.getElementById('login-message');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const loginSuccess = true;

        if (!emailInput.value || !emailRegex.test(emailInput.value)) {
            displayAlert('error', 'Please enter a valid email address');
            return;
        }

        if (loginSuccess) {
            window.location.href = '/home';
            displayAlert('success', 'Login successful!');
        } else {
            displayAlert('error', 'Login failed. Please try again.');
        }
    });

    function displayAlert(type, message) {
        const alertElement = document.createElement('div');
        alertElement.className = `alert ${type}`;
        alertElement.textContent = message;

        document.body.appendChild(alertElement);

        setTimeout(() => {
            alertElement.remove();
        }, 3000);
    }
});
