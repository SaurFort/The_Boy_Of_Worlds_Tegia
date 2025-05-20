<?php
// author: @SaurFort
// Ce fichier me sert surtout à simplifier ma gestion des cookies (qui est déjà très simple avec PHP)

/**
 * Créer/modifie un cookie
 * 
 * @param string $name nom du cookie
 * @param string $value valeur du cookie
 * @param int $expiration expiration du cookie, cela doit être un time unix, utilisez la fonction time() et ajoutez
 * @param string $path partie du site où le cookie est accessible
 * @return void
 */
function updateCookie(string $name, string $value, int $expiration = 0, string $path = "/"): void // Signfie que la fonction ne retourne rien, c'est optionnel
{
  setcookie($name, $value, $expiration, $path); // On vient écrire un nouveau cookie (nom, valeur, expiration, chemin du site)
}

/**
 * Lit le contenue d'un cookie
 * 
 * @param string $name nom du cookie
 * @return string|null valeur du cookie, si null, cookie non définit
 */
function readCookie(string $name): string|null // Signifie que la fonction va retourner soit une chaîne de caractère soit null, c'est optionnel
{
  return $_COOKIE[$name] ?? null; // On regarde si un cookie existe avec le nom recherché, si oui, on donne sa valeur, sinon, on retourne null
}

/**
 * Supprime un cookie
 * 
 * @param string $name nom du cookie
 * @param string $path partie du site où le cookie va être supprimé
 * @return void
 */
function deleteCookie(string $name, string $path = "/"): void
{
  updateCookie($name, "", 1, $path); // On vient réécrire un cookie vide qui est déjà expiré
}
