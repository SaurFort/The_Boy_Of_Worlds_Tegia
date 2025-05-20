<?php
// Puisque le jeu est fini, on vient effacer tout les cookies afin d'empêcher le joueur de revenir en arrière.
deleteCookie('inGame');
deleteCookie('chapter');
deleteCookie('karma');
deleteCookie('name');
deleteCookie('race')
?>

<div id="outro">
  <h1>Fin</h1>
  <p class="text-justify">Merci d'avoir joué, malheureusement, nous n'avons pas pu aller aussi loin que nous l'aurions souhaiter, mais nous sommes tout de même très satisfait du résultat. N'hésitez pas à refaire une partie pour tester les choix que vous n'avez pas fait, peut-être que vous obtiendrez une fin différentes ;)</p>
  <a class="button" href="/">Retour au menu</a>
</div>
