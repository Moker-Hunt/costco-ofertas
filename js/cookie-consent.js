document.addEventListener('DOMContentLoaded', function() {
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptButton = document.getElementById('accept-cookies');
    const moreInfoButton = document.getElementById('more-info');

    // Check if user has already accepted cookies
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieConsent.style.display = 'grid';
    } else {
        cookieConsent.style.display = 'none';
    }

    acceptButton.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieConsent.style.display = 'none';
    });

    moreInfoButton.addEventListener('click', function() {
        window.location.href = 'privacy.html';
    });
});
