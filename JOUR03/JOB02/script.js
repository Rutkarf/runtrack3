document.addEventListener('dragstart', (event) => {
  if (event.target.tagName === 'IMG') {
    event.dataTransfer.setData('text/plain', event.target.src);
  }
});

document.querySelectorAll('.image-slot').forEach((slot) => {
  slot.addEventListener('dragover', (event) => {
    event.preventDefault();
  });

  slot.addEventListener('drop', (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    if (!slot.hasChildNodes()) {
      const img = document.createElement('img');
      img.src = data;
      img.style.width = "100px";
      img.style.height = "100px";
      slot.appendChild(img);
      checkCompletion();
    }
  });
});

function checkCompletion() {
  const slots = document.querySelectorAll('.image-slot');
  let isComplete = true;
  slots.forEach((slot, index) => {
    const img = slot.querySelector('img');
    if (!img || img.src.indexOf(`arc${index + 1}.png`) === -1) {
      isComplete = false;
    }
  });

  const resultMessage = document.getElementById('result-message');
  if (isComplete) {
    resultMessage.textContent = 'Vous avez gagné!';
    resultMessage.style.color = 'green';
  } else {
    resultMessage.textContent = 'Faites glisser les images pour former l\'arc-en-ciel.';
    resultMessage.style.color = 'black';
  }
}

checkCompletion();  // Initial check for completion