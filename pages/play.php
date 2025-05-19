<?php
// author: @SaurFort

require "../assets/php/utils/cookie.php"; // Le require est un équivalent à la fonction include de PHP, cependant il demande que le fichier soit à tout prix présent.

$inGame = readCookie("inGame");
?>

<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="stylesheet" href="../assets/style.css" />
  <title>Nouvelle partie</title>
</head>

<body class="text-center">
  <?php

  if ($inGame != "true") {
    echo "<div><h1>Nouvelle partie</h1>";
    include "../common/selector.html";
    echo "</div>";
  } else {
    include "../common/intro.php";
  }

  ?>
</body>

</html>

<script src="../assets/js/play.js"></script>
