<div>
  <div id="scene0">
    <h1>Chapitre 1 - Héritage d'une guerre</h1>
  </div>
  <div class="hidden" id="scene1">
    <img src="../../assets/images/<?= $race ?>/chapter1/s_trone.png" />
    <div id="dialog1">
      <p class="text-justify">
        <b><?= $queen ?> - </b><?= $race === "kraith" ? "Notre peuple n'a jamais connue une paix aussi fragile. " : "" ?>Les <?= $oppositeRace ?> et nous avons mis fin à une guerre qui a durer bien trop longtemps, mais dans nos rues, certains veulent relancer les hostilités.
      </p>
      <p class="text-justify">
        <b>Conseiller <?= $race === "kraith" ? "Elrin" : "R-2D3" ?> - </b>Majesté, des éclats de voix ont eu lieu ce matin entre marchands <?= $properRace ?> et émissaires <?= $oppositeRace ?> sur le marché. Les insultes se sont transformées en menaces.
      </p>
      <p class="text-justify">
        <b><?= $queen ?> - </b>Nous devons éviter tout affrontement. Est-ce que je peux compter sur toi, <?= $name ?> ?
      </p>
    </div>
    <select class="mb-1" id="scene1Choice" name="scene1Choice" oninput="sceneOne()">
      <option value="">-- Choisissez votre dialogue --</option>
      <option value="0">Je ferais tout pour préserver la paix.</option>
      <option value="1">Cette paix est une illusion. Nous devons nous préparer à la guerre.</option>
      <option value="2">Je vous suivrais, Majesté. Dites-moi simplement ce que vous attendez de moi.</option>
      <option value="3">*(Regarder la reine sans rien dire)*</option>
    </select>
    <p class="text-justify hidden" id="dialog2">
      <b><?= $queen ?> - </b>
    </p>
  </div>
  <div class="hidden" id="scene2">
    <img src="../../assets/images/<?= $race ?>/chapter1/meeting.png" />
    <div id="dialog3">
      <p class="text-center">
        <em>Vous entrez dans la salle de réunion au moment où les voix s'élèvent. En entrant dans la salle, vous voyez 3 Kraiths <?= $race === 'kraith' ? ", vous reconnaissez : le commandant Khoran, le conseiller Elrin et votre ami Varek" : "" ?>, ainsi que 2 Yalks <?php $race === 'yalk' ? ", vous reconnaissez : le commandant R-2D1 ainsi et le conseiller R-2D3" : "" ?></em>
      </p>
      <p class="text-justify">
        <b>Khoran - </b> Ils veulent nos ressources, et il veulent imposer leurs machines dans nos foyers !
      </p>
      <p class="text-justify">
        <b>R2D1 - </b> Votre peuple a signé un traité. Ce traité comprenait le partage de nos ressources ! Vos émotions sont des interférences innaceptable dans le maintient de la paix.
      </p>
      <a class="button" onclick="sceneTwo()">Lancer le QTE</a>
    </div>
    <div class="hidden" id="dialogBox4">
      <p class="hidden" id="dialog4"><b><?= $race === "kraith" ? "R-2D3" : "Elrin" ?> - </b></p>
      <p class="hidden" id="dialog5"><em>En retournant à la salle du trône, <?= $queen ?> </em></p>
      <select id="scene2Choice" name="scene2Choice" oninput="sceneTwoChoice()">
        <option value="">-- Que souhaitez-vous faire ? --</option>
        <option value="0">*(Essayer de proposer un compromis)*</option>
        <option value="1">*(Essayer d'envenimer la situation)*</option>
      </select>
    </div>
  </div>
  <?php include "../common/minigame/qte.html" ?>
  <a id="nextScene" class="button hidden" onclick="nextScene()">Suivant</a>
</div>

<script src="../assets/js/game/chapter1.js"></script>
