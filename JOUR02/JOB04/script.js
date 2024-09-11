const keylogger = document.getElementById('keylogger');

document.addEventListener('keypress', function(event) {
    const char = String.fromCharCode(event.charCode);
    if (/[a-z]/i.test(char)) {
        keylogger.value += char;
        if (document.activeElement === keylogger) {
            keylogger.value += char; // Ajoute deux fois si le focus est sur le textarea
        }
    }
});