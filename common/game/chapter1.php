<div id="scene0">
  <h1>Chapitre 1 - Héritage d'une guerre</h1>
</div>
<div class="hidden" id="scene1">
  <img src="../../assets/images/<?= $race ?>/chapter1/s_trone.png" />
  <p class="text-justify">
    <b><?= $queen ?> - </b><?= $race === "kraith" ? "Notre peuple n'a jamais connue une paix aussi fragile. " : "" ?>Les <?= $oppositeRace ?> et nous avons mis fin à une guerre qui a durer bien trop longtemps, mais dans nos rues, certains veulent relancer les hostilités.
  </p>
  <p class="text-justify">
    <b>Conseiller <?= $race === "kraith" ? "Elrin" : "R-2D4" ?> - </b>Majesté, des éclats de voix ont eu lieu ce matin entre marchands <?= $properRace ?> et émissaires <?= $oppositeRace ?> sur le marché. Les insultes se sont transformées en menaces.
  </p>
  <p class="text-justify">
    <b><?= $queen ?> - </b>Nous devons éviter tout affrontement. Est-ce que je peux compter sur toi, <?= $name ?> ?
  </p>
  <select class="mb-1" id="scene1Choice" name="scene1Choice" oninput="sceneOne()">
    <option value="">-- Choisissez votre dialogue --</option>
    <option value="0">Je ferais tout pour préserver la paix.</option>
    <option value="1">Cette paix est une illusion. Nous devons nous préparer à la guerre.</option>
    <option value="2">Je vous suivrais, Majesté. Dites-moi simplement ce que vous attendez de moi.</option>
    <option value="3">*(Regarder la reine sans rien dire)*</option>
  </select>
</div>
<a id="nextScene" class="button hidden" onclick="nextScene()">Suivant</a>

<script src="../assets/js/game/chapter1.js"></script>
