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
  </div>

  <?php
  include "../common/minigame/qte.html";
  ?>

  <a class="button hidden" id="nextScene" onclick="nextScene()">Suivant</a>
</div>

<script src="../../assets/js/game/chapter4.js"></script>
