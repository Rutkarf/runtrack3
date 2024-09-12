<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jeu du Taquin</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Jeu du Taquin</h1>
  <div class="taquin-container">
    <div class="taquin-slot empty" data-position="8"></div>
    <div class="taquin-slot" data-position="0"></div>
    <div class="taquin-slot" data-position="1"></div>
    <div class="taquin-slot" data-position="2"></div>
    <div class="taquin-slot" data-position="3"></div>
    <div class="taquin-slot" data-position="4"></div>
    <div class="taquin-slot" data-position="5"></div>
    <div class="taquin-slot" data-position="6"></div>
    <div class="taquin-slot" data-position="7"></div>
    <div class="taquin-slot" data-position="8"></div>
  </div>
  <div id="result-message"></div>
  <button id="restart-button" style="display: none;">Recommencer</button>

  <script src="script.js"></script>
</body>
</html>