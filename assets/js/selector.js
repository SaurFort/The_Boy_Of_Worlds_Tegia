function sexes() {
  let yalkSexe = document.getElementById("sexe_Yalk");
  let kraithSexe = document.getElementById('sexe_Kraith');
let choix = document.getElementById('Espèce');

  if (choix.value == "1") {
    kraithSexe.style.opacity = 1.0;
    yalkSexe.style.opacity = 0.2;
  }

  if (choix.value == "2") {
    yalkSexe.style.opacity = 1.0;
    kraithSexe.style.opacity = 0.2;
  }
}