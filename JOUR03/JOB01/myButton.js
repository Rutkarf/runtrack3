const button = document.getElementById('myButton');
button.addEventListener('click', () => {
  const message = "Les logiciels et les cathédrales, c'est un peu la même chose - d'abord on les construit, ensuite on prie.";
  const messageElement = document.createElement('p');
  messageElement.textContent = message;
  document.body.appendChild(messageElement);
});