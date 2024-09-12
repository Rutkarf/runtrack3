const slots = document.querySelectorAll('.taquin-slot');
const emptySlot = document.querySelector('.empty');
const resultMessage = document.getElementById('result-message');
const restartButton = document.getElementById('restart-button');

// Générer des positions mélangées pour les carreaux
function shuffle() {
  const images = [
    "1.PNG", // Remplacez par le chemin réel de vos images
    "2.PNG",
    "3.PNG",
    "4.PNG",
    "5.PNG",
    "6.PNG",
    "7.PNG",
    "8.PNG",
    "9.PNG",
  ];

  // Mélanger les images
  images.sort(() => Math.random() - 0.5);
  images.push(null); // Ajouter la case vide

  slots.forEach((slot, index) => {
    slot.innerHTML = ''; // Effacer tout le contenu de la case
    const img = document.createElement('img');
    if (images[index] !== null) {
      img.src = images[index];
      img.alt = `Image ${index + 1}`;
      slot.appendChild(img); // Ajouter l'image au slot
      slot.classList.remove('empty');
    } else {
      slot.classList.add('empty');
    }
  });

  checkCompletion(); // Vérifier si le jeu est complet après mélange
}

// Déplacer un carreau dans la case vide
function moveTile(slot) {
  const emptyIndex = Array.from(slots).indexOf(emptySlot);
  const slotIndex = Array.from(slots).indexOf(slot);

  const validMoves = [emptyIndex - 1, emptyIndex + 1, emptyIndex - 3, emptyIndex + 3]; // Vérifier les mouvements valides

  if (validMoves.includes(slotIndex)) {
    // Échanger les contenus des slots
    emptySlot.innerHTML = slot.innerHTML; // Déplacer l'image dans la case vide
    slot.innerHTML = ''; // Effacer la case d'origine
    emptySlot.classList.remove('empty');
    slot.classList.add('empty');

    checkCompletion(); // Vérifier si le jeu est complet après le mouvement
  }
}

// Vérifie si le jeu est terminé
function checkCompletion() {
  let isComplete = true;
  slots.forEach((slot, index) => {
    const img = slot.querySelector('img');
    if (img && img.src.indexOf(`image${index + 1}.png`) === -1 && index !== 8) {
      isComplete = false;
    }
  });

  if (isComplete) {
    resultMessage.textContent = 'Vous avez gagné!';
    resultMessage.style.color = 'green';
    slots.forEach(slot => slot.style.pointerEvents = 'none'); // Désactiver les clics
    restartButton.style.display = 'block'; // Afficher le bouton redémarrer
  } else {
    resultMessage.textContent = ''; // Réinitialiser le message
  }
}

// Gestion des événements de clic
slots.forEach(slot => {
  slot.addEventListener('click', () => {
    if (!slot.classList.contains('empty')) {
      moveTile(slot); // Déplacer un carreau
    }
  });
});

// Gestion du bouton recommencer
restartButton.addEventListener('click', () => {
  shuffle(); // Mélanger à nouveau
  resultMessage.textContent = ''; // Effacer le message
  restartButton.style.display = 'none'; // Masquer le bouton
  slots.forEach(slot => slot.style.pointerEvents = 'auto'); // Réactiver les clics
});

// Initialiser le jeu
shuffle();
