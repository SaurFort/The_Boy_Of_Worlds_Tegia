<?php
require "../assets/php/utils/cookie.php";

$name = readCookie("name") ?? null; // On récupère le pseudo du joueur
$race = readCookie("race") ?? null; // On récupère la race du joueur

// On vérifie si nos cookies contenant le nom et la race du joueur sont remplie
// Le isset de PHP prend en compte les valeurs null et les chaînes de caractères vide
if (!isset($name) || !isset($race)) {
  header("Location: /"); // Ici on redirige vers la page d'accueil
}

$chapter = readCookie("chapter") ?? "1"; // On stocke le chapitre
$karma = (int) readCookie("karma") ?? 0; // On stocke le karma

$queen = $race === "kraith" ? "Louna" : "Alona"; // On stocke le nom de la reine du joueur
$properRace = $race === "kraith" ? "Kraiths" : "Yalks"; // On stocke l'écriture propre de la race du joueur
$oppositeRace = $race === "kraith" ? "Yalks" : "Kraiths"; // On stocke la race opposé
?>

<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="stylesheet" href="../assets/style.css" />
  <title>Partie de <?= $name /* On met ici le nom du joueur */ ?></title>
</head>

<body class="text-center">
  <p class="hidden" id="chapter"><?= $chapter ?></p>
  <p class="hidden" id="karma"><?= $karma ?></p>

  <?php
  // Ici on vérifie si on est au chapitre 5 (outro) sinon, on affiche la page correspondant au chapitre actuel
  if ($chapter == '5') include "../common/game/outro.php";
  else include "../common/game/chapter$chapter.php";
  ?>

  <a class="button hidden" id="nextPage" onclick="nextPage()">Suivant</a>
</body>

<script src="../assets/js/game/common.js"></script>

</html>
