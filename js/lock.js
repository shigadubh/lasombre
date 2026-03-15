document.addEventListener('DOMContentLoaded', function() {
    const lockScreen = document.getElementById('lock-screen');
    const passwordInput = document.getElementById('password');
    const unlockButton = document.getElementById('unlock');

    // Hardcoded password for simplicity
    const correctPassword = 'lasombre';

    unlockButton.addEventListener('click', function() {
        if (passwordInput.value === correctPassword) {
            lockScreen.style.display = 'none';
        } else {
            alert('Incorrect password');
        }
    });

    // Allow enter key to unlock
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            unlockButton.click();
        }
    });
});