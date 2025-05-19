<?php
require "../assets/php/utils/cookie.php";

$name = readCookie("name") ?? null;
$race = readCookie("race") ?? null;

// On vérifie si nos cookies contenant le nom et la race du joueur sont remplie
// Le isset de PHP prend en compte les valeurs null et les chaînes de caractères vide
if (!isset($name) || !isset($race)) {
  header("Location: /"); // Ici on redirige vers la page d'accueil
}

$chapter = readCookie("chapter") ?? "1";
$karma = (int) readCookie("karma") ?? 0;

$queen = $race === "kraith" ? "Louna" : "Alona";
$properRace = $race === "kraith" ? "Kraiths" : "Yalks";
$oppositeRace = $race === "kraith" ? "Yalks" : "Kraiths";
?>

<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="stylesheet" href="../assets/style.css" />
  <title>Partie de <?= $name ?></title>
</head>

<body class="text-center">
  <p class="hidden" id="chapter"><?= $chapter ?></p>
  <p class="hidden" id="karma"><?= $karma ?></p>

  <?php
  include "../common/game/chapter$chapter.php";
  ?>

  <a class="button hidden" id="nextPage" onclick="nextPage()">Suivant</a>
</body>

<script src="../assets/js/game/common.js"></script>

</html>
