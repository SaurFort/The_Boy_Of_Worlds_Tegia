// author: @Hakitox1004
//ici, on récupere les valeurs données depuis le selecteur pour tester
// voir si le joueur a choisit "Kraith" ou bien "Yalk".
//apres cela on determine quel champs de validation de sexe doit etre desactivé.

function sexes() {
  let sexe0 = document.getElementById('0')
  let sexe1 = document.getElementById('1')
  let hommesexe = document.getElementById('homme')
  let femmesexe = document.getElementById('femme')

  let yalkSexe = document.getElementById('sexe_Yalk')
  let kraithSexe = document.getElementById('sexe_Kraith')
  let choix = document.getElementById('Espèce')

  if (choix.value == '1') {
    sexe0.disabled = true
    sexe1.disabled = true
    hommesexe.disabled = false
    femmesexe.disabled = false
    kraithSexe.style.opacity = 1.0
    yalkSexe.style.opacity = 0.2
  }

  if (choix.value == '2') {
    sexe0.disabled = false
    sexe1.disabled = false
    hommesexe.disabled = true
    femmesexe.disabled = true
    yalkSexe.style.opacity = 1.0
    kraithSexe.style.opacity = 0.2
  }
}

//ici, je fais une liste de mots interdits pour éviter au joueur
//de posséder un nom inadapté. Sois dans le lore de l'univers ou bien de
//maniere générale avec des noms de figures historiques, des paradoxes ou juste pour la blague...
const nomsInterdits = [
  'xafully',
  'teto',
  'terrador',
  'feryos',
  'ikosso',
  'ghurderal',
  'orodar',
  'arionyx',
  'sotild',
  'aly',
  'the boy',
  'boy',
  'louna',
  'alona',
  'xoryus',
  'yaran',
  'tokati',
  'hélix',
  'kelos',
  'hitler',
  'staline',
  'mussolini',
  'franco',
  'adolf hitler',
  'crabe',
  'crabes',
  'kira',
  'moi',
  'toi',
  'lui',
  'bill',
  'xx_Darkness92_xx',
  '00110110 00111001',
  'hakito',
  'saurfort',
  'desire',
  'désiré',
  'motherfucker',
  'mother fucker',
  'le mother fucker',
  'pute',
  'benladen',
  'ben laden',
  'mao',
  'sex',
  'sexe',
  'pedo',
  'nazi',
  'terroriste',
  'fuck',
  'shit',
  'pute',
  'connard',
  'batard',
  'enculé',
  'fdp',
  'salot',
  'raciste',
  'coccinelle',
  'frauline',
  'kkk',
  'negga',
  'neggro',
  'noir',
  'bite',
]

function verifierNom() {
  let testNom = document.getElementById('testNom')
  let selection = document.getElementById('nomselectionner')

  const nomMinuscule = selection.value

  if (nomsInterdits.includes(nomMinuscule.toLowerCase())) {
    boutton_valider.style.opacity = 0.2
    boutton_valider.disabled = true
    testNom.innerText = 'Votre pseudo est invalide'
    //alert('Ce nom est invalide, veuillez en choisir un autre...')
  } else {
    boutton_valider.style.opacity = 1.0
    boutton_valider.disabled = false
    alert('Nom valide! Vous pouvez continuez!')
  }
}
