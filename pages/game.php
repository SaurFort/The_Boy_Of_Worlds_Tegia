<?php
require "../assets/php/utils/cookie.php";

$name = readCookie("name") ?? null;
$race = readCookie("race") ?? null;
$gender = readCookie("gender") ?? "male";
//$chapter = readCookie("chapter") ?? "1";
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
  <?php
  // Ici nous importons les 7 pages pour pouvoir les précharger et simplement switcher les pages avec JS
  for ($i = 1; $i <= 7; $i++) {
    include "../common/game/chapter$i.php";
  }
  ?>

  <button class="button" id="nextBtn" onclick="nextPage()">Suivant</button>
</body>

<script src="../assets/js/chapterSelector.js"></script>

</html>
