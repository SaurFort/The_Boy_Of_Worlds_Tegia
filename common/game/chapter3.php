<div id="chapter3">
  <!-- Scene 0 - Titre chapitre  -->
  <div id="scene0">
    <h1>Chapitre 3 - L'engrenage du chaos</h1>
  </div>
  <!-- Scene 1 -->
  <div class="hidden" id="scene1">
    <img src="../../assets/images/<?= $race ?>/chapter3/s_trone.png" />
    <div id="dialog1">
      <p class="text-justify">
        <b>Garde - </b> Le peuple est en colère, plusieurs groupes de rebels sont en train de se soulever dans la capitale. Il y a des morts. On ne contrôle plus rien.
      </p>
      <p class="text-justify">
        <b><?= $race === 'kraith' ? 'Elrin' : 'R-2D3' ?> - </b> La reine <?= $queen ?> est en réunion avec la reine des <?= $oppositeRace ?>. C'est l'apocalypse dehors, <?= $name ?>, on a besoin que vous fassiez quelques choses.
      </p>
    </div>
    <p class="text-center">
      <em id="dialog2"></em>
    </p>
    <select id="select1" name="select1" oninput="selectOne()">
      <option value="" selected disabled>-- Qu'allez-vous faire ? --</option>
      <option value="1">Seule une répression permettra de calmer les émeutes.</option>
      <option value="2">Annoncer un couvre-feu et appelez au calme, cela devrait aider à éviter le bain de sang.</option>
      <option class="<?= $karma > 2 ? 'hidden' : '' ?>" id="select1Choice3" value="3">*(Essayer de convaincre le commandant <?= $race === 'kraith' ? 'Khoran' : 'R-2D1' ?> de calmer les émeutes sans violence.)*</option>
      <option class="<?= $karma < -2 ? 'hidden' : '' ?>" id="select1Choice4" value="4">*(Discuter avec le conseiller <?= $race === 'kraith' ? 'Elrin' : 'R-2D1' ?> d'une solution pacifique.)*</option>
    </select>
  </div>

  <?php
  include "../common/minigame/qte.html"
  ?>

  <a class="button hidden" id="nextScene" onclick="nextScene()">Suivant</a>
</div>

<script src="../../assets/js/game/chapter3.js"></script>
