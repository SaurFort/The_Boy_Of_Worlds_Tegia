//ici, on récupere les valeurs données depuis le selecteur pour tester
// voir si le joueur a choisit "Kraith" ou bien "Yalk".
//apres cela on determine quel champs de validation de sexe doit etre desactivé.

function sexes() {
  let yalkSexe = document.getElementById("sexe_Yalk");
  let kraithSexe = document.getElementById("sexe_Kraith");
  let choix = document.getElementById("Espèce");

  if (choix.value == "1") {
    kraithSexe.style.opacity = 1.0;
    yalkSexe.style.opacity = 0.2;
  }

  if (choix.value == "2") {
    yalkSexe.style.opacity = 1.0;
    kraithSexe.style.opacity = 0.2;
  }
}

//ici, je fais une liste de mots interdits pour éviter au joueur
//de posséder un nom inadapté. Sois dans le lore de l'univers ou bien de
//maniere générale avec des noms de figures historiques, des paradoxes ou juste pour la blague...
const nomsInterdits = [
  "xafully",
  "teto",
  "terrador",
  "feryos",
  "ikosso",
  "ghurderal",
  "orodar",
  "arionyx",
  "sotild",
  "aly",
  "the boy",
  "boy",
  "louna",
  "alona",
  "xoryus",
  "yaran",
  "tokati",
  "hélix",
  "kelos",
  "hitler",
  "staline",
  "mussolini",
  "franco",
  "adolf hitler",
  "crabe",
  "crabes",
  "kira",
  "moi",
  "toi",
  "lui",
  "bill",
  "xx_Darkness92_xx",
  "00110110 00111001"
];

function verifierNom() {
    let selection = document.getElementById("nomselectionner");

  const nomMinuscule = selection.value.toLowerCase();

  if (nomsInterdits.includes(nomMinuscule)) {
    alert("Ce nom est invalide, veuillez en choisir un autre...");
  } else {
    alert("Nom valide! Vous pouvez continuez!");
  }
}
