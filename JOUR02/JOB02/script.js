function showhide() {
    const article = document.getElementById('article');
    if (article) {
        article.remove();
    } else {
        const newArticle = document.createElement('article');
        newArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(newArticle);
    }
}

document.getElementById('button').addEventListener('click', showhide);