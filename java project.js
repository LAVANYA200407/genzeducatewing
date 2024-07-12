document.addEventListener('DOMContentLoaded', function() {
    // Form submission
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simulating form submission
        setTimeout(function() {
            document.getElementById('form-status').innerHTML = "Message sent successfully!";
        }, 1000);
    });

    // Smooth scrolling
    const container = document.querySelector('.container');

    container.addEventListener('click', function(event) {
        event.preventDefault();

        const targetId = event.target.closest('a').getAttribute('href').substring(1);

        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});