<?php
// author: @SaurFort

$name = readCookie("name") ?? null;
$race = readCookie("race") ?? null;
?>

<div>
  <h2>Introduction</h2>
  <p class="text-justify">
    Après des décennies de guerre entre les <b>Kraiths</b> et les <b>Yalks</b>,
    une paix fragile a été instauré par les reines <b>Louna</b> et <b>Alona</b>.
    Cependant, les tensions persistent. Les <b>Kraiths</b>, peuple humanoïde au
    mode de vie médiéval mais technologiquement avancé, voient la paix comme une
    trahison pour certains. Les <b>Yalks</b>, des êtres robotiques, sont divisés
    entre ceux qui veulent coexister avec les <b>Kraiths</b> et ceux qui jugent
    les <b>Kraiths</b> comme inférieurs et dangereux.
  </p>
  <p class="text-justify">
    <?= $name ?? "Le héros, enfin vous" ?>, vous êtes proche de la reine<?= $race !== null ? ($race === "kraith" ? " Louna" : " Alona") : "" ?>, <!-- Condition embriqué, dispose de la même syntaxe en JS -->
    vous jouez un rôle essentiel dans la stabilisation ou la destruction de cette paix.
    Vos choix détermineront si une collaboration pourra exister entre ces deux
    peuples ou si la guerre reprendra de plus belle.
  </p>
</div>

<a class="button mt-3" href="/pages/game.php">Suivant</a>
