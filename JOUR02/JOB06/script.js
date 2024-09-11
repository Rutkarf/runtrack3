let konamiCode = "38384040373937393534"; // Code Konami en keycodes
let input = "";

document.addEventListener('keydown', function(event) {
    input += event.keyCode;
    if (input === konamiCode) {
        document.body.style.backgroundColor = "#FF5733"; // Couleurs de La Plateforme_
        input = ""; // Réinitialiser l'entrée après utilisation
    }
});