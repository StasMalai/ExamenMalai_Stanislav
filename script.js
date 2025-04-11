document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        let isValid = true;
        const numeInput = document.getElementById('nume');
        const emailInput = document.getElementById('email');

        if (numeInput.value.trim() === '') {
            alert('Te rugăm să introduci numele tău.');
            isValid = false;
        }

        if (emailInput.value.trim() === '') {
            alert('Te rugăm să introduci adresa ta de email.');
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
            alert('Te rugăm să introduci o adresă de email validă.');
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault(); // Prevents the form from submitting if validation fails
        } else {
            alert('Formular trimis!'); // Simulare de trimitere reușită
        }
    });
});