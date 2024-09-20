// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Implement form submission logic (e.g., via AJAX)
            alert('Thank you for contacting us!');
            contactForm.reset();
        });
    }

    // Login Form Submission
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Implement login logic (e.g., authentication via backend)
            const role = document.getElementById('role').value;
            const email = document.getElementById('email').value;
            // For demonstration, redirect based on role
            if (role === 'admin' || role === 'doctor' || role === 'patient') {
                window.location.href = 'dashboard.html';
            } else {
                alert('Invalid role selected.');
            }
        });
    }
});
