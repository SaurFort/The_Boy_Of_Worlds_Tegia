<div id="chapter4">
  <!-- Scene 0 - Titre chapitre -->
  <div id="scene0">
    <h1>Chapitre 4 - Point de non-retour</h1>
  </div>

  <!-- Scene 1 -->
  <div class="hidden" id="scene1">
    <img src="../../assets/images/<?= $race ?>/chapter1/meeting.png" />
    <div class="dialog1">
      <p class="text-center">
        <em>Vous êtes actuellement en cellule de crise. Il y a un soulèvement, et désormais l'avenir des <?= $properRace ?> repose sur vos épaules.</em>
      </p>
      <p class="text-justify">
        <b><?= $race === 'kraith' ? 'Khoran' : 'R-2D1' ?> - </b> <?= $karma >= 0 ? "$queen, je ne vous soutiendrais plus ! Puisque vous n'êtes pas pour l'armée, alors vous êtes contre. De toutes manière, votre fin arrivera bientôt." : "La reine ne mérite plus votre soutien $name. Venez avec moi ! Je pense que seule vous êtes en capacité de nous diriger." ?>
      </p>
      <p class="text-justify">
        <b><?= $race === 'kraith' ? 'Elrin' : 'R-2D3' ?> - </b> <?= $karma >= 0 ? "Ma reine, le conseil continuera de vous soutenir coûte que coûte. Et je pense que $name vous soutiendra aussi." : "$name, vous ne pouvez pas nous faire ça, vous avez été le plus fidèle conseiller de la reine $queen." ?>
      </p>
    </div>
    <a class="button" onclick="sceneOne()">Suivant</a>
  </div>

  <!-- Scene 2 -->
  <div class="hidden" id="scene2">
    <!-- Si karma >= 0 -->
    <div class="hidden" id="forQueen">
      <img src="../../assets/images/<?= $race ?>/chapter1/meeting.png" />
      <div id="forQueenGame">
        <p class="text-justify">
          <b><?= $queen ?> - </b>Merci <?= $name ?> de m'avoir soutenu jusqu'ici. Désormais, il ne reste plus qu'une chose à faire. Réussir à vaincre le commandant <?= $race === 'kraith' ? 'Khoran' : 'R-2D1' ?> ainsi, nous pourrons mettre un terme à cette guerre civil. Cependant je m'en remet à toi, tu as été mon plus fidèle conseiller et j'ai confiance en toi pour réussir à mettre un terme à cette guerre civil.
        </p>
        <select id="select2" name="select2" oninput="forQueen()">
          <option value="" selected disabled>-- Qu'allez-vous faire ? --</option>
          <option value="1">J'irai affronter le commandant <?= $race === 'kraith' ? 'Khoran' : 'R-2D1' ?></option>
          <option value="2">Il faut résister aux attaques ennemis et prier.</option>
          <option value="3">Nous sommes perdus ...</option>
        </select>
      </div>
      <div class="hidden" id="forQueenChoice">
        <p class="text-center">
          <em id="fqcText"></em>
        </p>
        <a class="button" onclick="nextPage()">Fin !</a>
      </div>
    </div>

    <!-- Si karma < 0 -->
    <div class="hidden" id="againstQueen">
      <img src="../../assets/images/<?= $race ?>/chapter3/s_trone.png" />
      <p class="text-justify">
        <b><?= $race === 'kraith' ? 'Khoran' : 'R-2D1' ?> - </b><?= $name ?>, vous pouvez comptez sur le soutien de l'armée, et je m'en remet à vous pour la suite. Que devons-nous faire ?
      </p>
      <select id="select2" name="select2" oninput="againstQueen()">
        <option value="" selected disabled>-- Qu'allez-vous faire ? --</option>
        <option value="1">J'irai affronter la reine <?= $queen ?></option>
        <option value="2">Il faut continuer de les attaquer.</option>
        <option value="3">Nous sommes perdus ...</option>
      </select>
    </div>
    <div class="hidden" id="againstQueenChoice">
      <p class="text-center">
        <em id="aqcText"></em>
      </p>
      <a class="button" onclick="nextPage()">Fin !</a>
    </div>
  </div>

  <?php
  // On importe le QTE pour l'avoir sous la main
  include "../common/minigame/qte.html";
  ?>

  <a class="button hidden" id="nextScene" onclick="nextScene()">Suivant</a>
</div>

<script src="../../assets/js/game/chapter4.js"></script>
