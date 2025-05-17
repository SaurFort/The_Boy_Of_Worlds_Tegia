<div class="" id="chapter1">
  <div id="chapter1Scene0">
    <h1>Chapitre 1 - Héritage d'une guerre</h1>
  </div>
  <div class="hidden" id="chapter1Scene1">
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
    <div id="chapter1Scene1Choices text-justify">
      <form class="grid grid-cols-1">
        <label><input value="0" name="radio" type="checkbox" /> Je ferais tout pour préserver la paix.</label>
        <label><input value="1" name="radio" type="checkbox" /> Cette paix est une illusion. Nous devons nous préparer à la guerre.</label>
        <label><input value="2" name="radio" type="checkbox" /> Je vous suivrais, Majesté. Dites-moi simplement ce que vous attendez de moi.</label>
        <label><input value="3" name="radio" type="checkbox" /> <em>(Regarder la reine sans rien dire)</em></label>
      </form>
    </div>
  </div>
  <a id="chapterOneNext" class="button hidden" onclick="chapterOneNextScene()">Suivant</a>
</div>

<script src="../assets/js/game/chapter1.js"></script>
