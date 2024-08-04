document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.querySelector('#name').value.trim();
        const phone = document.querySelector('#phone').value.trim();
        const email = document.querySelector('#email').value.trim();
        const message = document.querySelector('#message').value.trim();

        if (!name || !phone || !email || !message) {
            alert('All fields are required!');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address!');
            return;
        }

        alert('Form submitted successfully!');
        contactForm.reset();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
