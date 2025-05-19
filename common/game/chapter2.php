<div>
  <div id="scene0">
    <h1>Chapitre 2 - Ombres de la Discorde</h1>
  </div>
  <div class="hidden" id="scene1">
    <img src="../../assets/images/<?= $race ?>/chapter1/s_trone.png" />
    <div id="dialog1">
      <p class="text-center">
        <em>
          Un messager entre en courant dans la salle du trone. Vous écoutez attentivement ce qu'il s'apprète à dire.
        </em>
      </p>
      <p class="text-justify">
        <b><?= $queen ?> - </b>Qu'est-ce qui se passe messager ?
      </p>
      <p class="text-justify">
        <b>Message - </b> Une attaque, ma reine... Un groupe de fanatiques <?= $properRace ?> a attaqué l'avant poste <?= $oppositeRace ?> du pont d'Harkan. Il y a des morts et des blessés parmis les <?= $oppositeRace ?> !
      </p>
    </div>
    <div class="hidden" id="dialog2">
      <p class="text-center">
        <em>La salle du trône devient silencieuse... Le silence en devient presque lourd.</em>
      </p>
      <p class="text-justify">
        <b><?= $queen ?> - </b>Le peuple veut la guerre. Mais je ne le tolérerai pas. <?= $name ?>... J'ai besoin que tu ailles mener ton enquête là-bas. Essaie de trouver les coupable. Je te laisse carte blanche.
      </p>
    </div>
    <a class="button" id="nextDialog" onclick="sceneOne()">Suivant</a>
  </div>
  <div class="hidden" id="scene2">
    <img src="../../assets/images/<?= $race ?>/chapter2/harkan_bridge.png" />
    <div id="dialog3">
      <p class="text-center">
        <em>
          Vous êtes escorté jusqu'à l'avant poste <?= $oppositeRace ?> par une petite patrouille. Plus vous approchez de l'avant poste, plus l'odeur des cendres vous prends. A l'intérieur du camp, presque tout est en ruine. Les quelques survivants restant continuent de fouiller les décombres. Les soldats <?= $oppositeRace ?> sont tendus.
        </em>
      </p>
      <p class="text-justify">
        <b><?= $race === 'kraith' ? 'Commandant R-2D1' : 'Commandant Khoran' ?> - </b> <?= $karma > 0 ? "Tu viens pour l'enquête ?" : "Tu viens pour couvrir tes semblables ?" ?> On a retrouvé des fragments <?= $race === 'kraith' ? 'd\'armure Kraith' : 'de membres Yalks' ?>. Il y a des témoins. Vous n'aurez pas besoin de faire de procès.
      </p>
    </div>
    <div class="hidden" id="investigation">
      <p id="investigationInstruction" class="text-center">
        <em>Que souhaitez-vous faire ?</em>
      </p>
      <select id="investigationChoice" name="investigationChoice" oninput="investigation()">
        <option value="" selected disabled>-- Qu'allez-vous faire ? --</option>
        <option id="investigationChoice1" value="1">*(Allez voir les témoins.)*</option>
        <option class="hidden" id="investigationChoice2" value="2">*(Suivre la trace des terroristes.)*</option>
        <option id="investigationChoice3" value="3">*(Observer les fragments <?= $race === 'kraith' ? "d'armure Kraiths" : 'de membres Yalks' ?>.)*</option>
      </select>
    </div>
    <div class="hidden" id="investigation1">
      <p class="text-center">
        <em>Vous approchez des témoins et vous leur demandez ce qu'ils ont vu.</em>
      </p>
      <p class="text-justify">
        <b>Témoin 1 - </b>Au début, 2 personnes sont arrivé en courant vers l'avant poste. Puisqu'ils avaient l'air en panique, les soldats les ont laissé rentré pour pouvoir comprendre ce qu'il se passait. Et c'est là qu'une explosion a eu lieu dans le bureau du chef de l'avant poste.
      </p>
      <p class="text-justify">
        <b>Témoin 2 - </b>J'ai vu les 2 personnes s'enfuirent par cette porte sur le côté. Faites tout ce que vous pouvez, j'ai perdu un ami à cause d'eux !
      </p>
      <p class="text-center">
        <em>Le troisième témoin est encore sous le choc vous n'en tirerai rien.</em>
      </p>
      <a class="button" onclick="investigationChoiceOne()">Suivant</a>
    </div>
    <div class="hidden" id="investigation2">
      <p class="text-center">
        <em>Vous suivez la piste donné par le Témoin 2, la piste est facile à suivre avec toutes ces traces de sang. Puis vous arrivez devant une grotte.</em>
      </p>
      <select id="investigationSelectTwo" name="investigationSelectTwo" oninput="investigationTwoSelect()">
        <option value="" selected disabled>-- Que souhaitez-vous faire ? --</option>
        <option value="1">*(Entrer dans la grotte)*</option>
        <option value="2">*(Faire demi-tour)*</option>
      </select>
      <div class="hidden" id="">
        <a class=" button" onclick="investigationChoiceTwo()">Suivant</a>
      </div>
    </div>
    <div class="hidden" id="investigation3">
      <p class="text-center">
        <em><?= $race === 'kraith' ? 'Le commandant R-2D1 ' : 'Le commandant Khoran ' ?>vous tends les fragments. Vous reconnaissez <?= $race === 'kraith' ? "l'armure des recrues Kraiths" : "les membres d'un serviteur Yalks" ?>.</em>
      </p>
      <a class="button" onclick="investigationChoiceThree()">Suivant</a>
    </div>
    <select id="choice1" name="choice1" oninput="sceneTwo()">
      <option value="" selected disabled>-- Sélectionnez votre réponse --</option>
      <option value="0">Je vais mener mon enquête. Nous ne ferons rien sans preuve.</option>
      <option value="1">Je m'occuperai de les juger !</option>
      <option value="2">Ils auront ce qu'ils méritent. Les actions ont un prix !</option>
      <option value="3">*(Rester silencieux et observer les ruines.)*</option>
    </select>
  </div>
  <div class="hidden" id="scene3"></div>
  <div class="hidden" id="scene4"></div>
  <a id="nextScene" class="button hidden" onclick="nextScene()">Suivant</a>
</div>

<script src="../../assets/js/game/chapter2.js"></script>
