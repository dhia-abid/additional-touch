document.addEventListener('DOMContentLoaded', function () {
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const box = document.querySelector('.box');

    // =========================================================
    // Animation 1: Spin and Scale
    // =========================================================
    btn1.addEventListener('click', function () {
        box.classList.remove(
            'animate-spin-scale',
            'animate-bounce-color'
        );

        void box.offsetWidth;

        box.classList.add('animate-spin-scale');

        setTimeout(() => {
            box.classList.remove('animate-spin-scale');
        }, 1000);
    });

    // =========================================================
    // Animation 2: Bounce and Color Change
    // =========================================================
    btn2.addEventListener('click', function () {
        box.classList.remove(
            'animate-spin-scale',
            'animate-bounce-color'
        );

        void box.offsetWidth;

        box.classList.add('animate-bounce-color');

        setTimeout(() => {
            box.classList.remove('animate-bounce-color');
        }, 1000);
    });

    // =========================================================
    // Easter Egg: "Cryptic Horizon"
    // Exact match: crypticHorizon (capital 'H')
    // =========================================================

    const secretPhrase = 'crypticHorizon';   // <-- Exact match required
    let typedText = '';

    const secretPopup = document.getElementById('secret-popup');
    const closePopup = document.getElementById('close-popup');

    // Listen for keyboard input anywhere on the page
    document.addEventListener('keydown', function (event) {
        // Ignore modifier keys (Shift, Ctrl, Alt, etc.)
        if (event.key.length !== 1) {
            return;
        }

        // Add the character typed (KEEP the exact case)
        typedText += event.key;

        // Keep only the number of characters needed to match the phrase
        if (typedText.length > secretPhrase.length) {
            typedText = typedText.slice(-secretPhrase.length);
        }

        // Check whether the secret phrase was entered
        if (typedText === secretPhrase) {
            showSecretPopup();

            // Reset so the phrase can be typed again later
            typedText = '';
        }
    });

    // Show popup
    function showSecretPopup() {
        secretPopup.classList.add('show');
        secretPopup.setAttribute('aria-hidden', 'false');
    }

    // Close popup
    function hideSecretPopup() {
        secretPopup.classList.remove('show');
        secretPopup.setAttribute('aria-hidden', 'true');
    }

    closePopup.addEventListener('click', hideSecretPopup);

    // Close when clicking outside the popup
    secretPopup.addEventListener('click', function (event) {
        if (event.target === secretPopup) {
            hideSecretPopup();
        }
    });

    // Close with Escape
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            hideSecretPopup();
        }
    });
});
