// Initialisation de EmailJS
(function() {
    emailjs.init("tnaNvyu2s5FUzJxQd"); // Vous devrez remplacer ceci par votre clé publique EmailJS
})();

// Smooth scrolling pour les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation du header au scroll
let header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }

    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scroll Down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scroll Up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Gestion du formulaire de contact
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Envoi en cours...';
        submitButton.disabled = true;

        // Préparation des paramètres pour l'email
        const templateParams = {
            to_email: 'mariusmaury41@gmail.com',
            from_name: this.user_name.value,
            from_email: this.user_email.value,
            phone: this.user_phone.value,
            message: this.message.value
        };

        // Envoi de l'email via EmailJS
        emailjs.send('service_l0o3y9h', 'template_lro1fjq', templateParams)
            .then(function() {
                alert('Votre message a été envoyé avec succès !');
                contactForm.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, function(error) {
                alert('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.');
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                console.error('Erreur:', error);
            });
    });
}

// Animation des cartes de prix au survol
document.querySelectorAll('.pricing-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
}); 