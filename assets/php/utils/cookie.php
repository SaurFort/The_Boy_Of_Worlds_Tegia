<?php
// author: @SaurFort

/**
 * Créer/modifie un cookie
 * 
 * @param string $name nom du cookie
 * @param string $value valeur du cookie
 * @param int $expiration expiration du cookie, cela doit être un time unix, utilisez la fonction time() et ajoutez
 * @param string $path partie du site où le cookie est accessible
 * @return void
 */
function updateCookie(string $name, string $value, int $expiration = 0, string $path = "/"): void // Signfie que la fonction ne retourne rien
{
  setcookie($name, $value, $expiration, $path); // 
}

/**
 * Lit le contenue d'un cookie
 * 
 * @param string $name nom du cookie
 * @return string|null valeur du cookie, si null, cookie non définit
 */
function readCookie(string $name): string|null // Signifie que la fonction va retourner soit une chaîne de caractère soit null (utile sur le PHPDoc + autocomplétion)
{
  return $_COOKIE[$name] ?? null;
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
  updateCookie($name, "", 1, $path);
}
