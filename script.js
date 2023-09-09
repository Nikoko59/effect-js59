function openTable(evt, tablePer) {
  var i, onglets, onglinks;
  onglets = document.getElementsByClassName("onglet-contenu");
  for (i = 0; i < onglets.length; i++) {
    onglets[i].style.display = "none";
  }
  onglinks = document.getElementsByClassName("onglink");
  for (i = 0; i < onglinks.length; i++) {
    onglinks[i].className = onglinks[i].className.replace(" active", "");
  }
  document.getElementById(tablePer).style.display = "block";
  evt.currentTarget.className += " active";
}

const unikTit = document.querySelector("h2");
const paragraph = document.querySelector(".paragraph1");
const button = document.querySelector(".onglink");
const onglets1 = document.querySelector(".onglet");

setTimeout(function () {
  unikTit.style.background = " #ffbc34";
  unikTit.style.padding = "15px";
  unikTit.style.borderRadius = "35px";
}, 1000);

paragraph.addEventListener("click", () => {
  document.querySelector("p").innerHTML = "Tu as Trouvé les Bonnes Réponses ";
});

button.addEventListener("click", () => {
  button.style.background = "#070142";
  button.style.color = "white";
  button.style.padding = "15px ";
});

onglets1.addEventListener("click", () => {
  let u = "Super";
  let o = "Bravo";
  if (u === o) {
    alert("Bravo");
  } else {
    alert("Tu connais les 118 éléments?");
  }
});

setTimeout(function () {
  onglets1.style.borderRadius = "50px";
  onglets1.style.transform = "translateY(40px)";
}, 1500);
