const hideButton = document.createElement('button');
hideButton.textContent = 'Cacher le message';
hideButton.addEventListener('click', () => {
  const messageElement = document.querySelector('p');
  messageElement.style.display = 'none';
});
document.body.appendChild(hideButton);