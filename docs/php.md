# PHP

PHP est un langage backend donc nécessite l'utilisation d'un serveur web/PHP pour fonctionner.

Pour comprendre la manière dont nous l'avons utilisé dans ce projet, nous allons expliquer quelques fonctionnement de ce dernier.

## Les bases

Lorsque l'on utilise PHP, il faut déjà avoir un serveur web (Apache, Nginx, ...) ou bien un serveur PHP (en se servant de la commande `php -S localhost:8080`, le port est néanmoins modifiable).

Lorsque l'on développe un site Internet avec PHP, nous pouvons soit utilisé des fichiers **HTML** `.html` ou bien des fichiers **PHP** `.php`.

> [!WARNING]\
> Si on veut écrire du PHP, il faut impérativement utiliser des fichiers **PHP** `.php`.

> [!NOTE]\
> Dans les fichiers **PHP**, il est tout à fait possible d'écrire de l'**HTML** de manière classique.

L'écriture de code PHP nécessite l'utilisation d'une balise spécifique :

```php
<?php
// Ceci est du PHP
?>

<!DOCTYPE html>
<html>
  <body>
    <h1>Mon super site en HTML</h1>
  </body>
</html>
```

La balise PHP s'ouvre avec `<?php` et se referme avec `?>`.

> [!NOTE]\
> Cependant il existe une deuxième balise PHP que nous avons beaucoup utilisé qui sert de raccourci, pour comprendre son fonctionnement il faut d'abord comprendre comment PHP peut afficher du texte sur une page web.

```php
<?php
echo "Ceci est du texte brut" // PHP va afficher le texte tel qu'on le présente
echo "<h1>Ceci est une balise HTML</h1>" // PHP va afficher le texte tel qu'on le présente, sauf que quand le navigateur récupère la page, il va interpréter cela comme de l'HTML.
?>
```

Donc, cela nous permet par exemple de compléter du texte dans notre page avant le chargement.

```php
<?php
$valeur = "Hello, World!" // Les variables de PHP sont comme celle de JavaScript ou de Python, elles n'ont pas de types strictes par défaut, cependant il est totalement possible de les typers.
?>

<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ma page PHP</title>
</head>
<body>
  <h1>Bonjour <?php echo $valeur ?></h1> // Donc PHP va insérer le contenue de notre variable soit "Hello, World!"
</body>
</html>
```
