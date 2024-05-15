import { macskaLISTA } from "./adatok.js";
import { kartyaOsszeallit, megjelenit, tablazatOsszealit } from "./fugveny.js";
import { szuresNevSzerint } from "./adatSzures.js";
import { rendezesCsokkeno, rendezesNovekvo } from "./adatRendez.js";
import { kosarLista } from "./adatok.js";

/***kartyaOsszeallit(adatokLista, txt)-->txt**
--Összeálitja a kárytákat
**megjelenit(txt, szuloElem)**
--Megjeleniti a txt-be irt táblázatot, és kártyákat*/
//tablazatOsszealit();

$(document).ready(function() {
  init(macskaLISTA);
});

export function init(lista) {
  tablazatOsszealit(kosarLista);
  let txt = kartyaOsszeallit(lista);
  megjelenit(txt);
  nevSzuresEsemeny(lista);
  //arSzuresEsemeny(lista);
  rendezesKattintAr(lista);
  rendezesKattintSuly(lista);
  kosarGombKatt(lista);
}

/***szuresNevSzerint(adatokLista, szurtSzoveg)-->szurtLista**
--AdatokListábol a beviteli mezobol megadott név  szerinti szűrés*/
function nevSzuresEsemeny() {
  /* a szűrőbe írt szó alaján kilistázza azokat az adatokat a listából, amelyekben szerepel a név mezőjében az adott szó. 
  Ezután megjelenítjük a szűrt listát az oldalon. 
  Akkor fog lefutni, amikor megváltozik a szűrőmező tartalma  */
  const szuroELEM = $("#szNev");
  szuroELEM.on("keyup", function () {
    let szuroSZoveg = szuroELEM.val();
    const LISTA = szuresNevSzerint(macskaLISTA, szuroSZoveg);
    console.log(LISTA);
    init(LISTA);
  });
}

export function rendezesKattintAr(lista) {
  const rendezesElemek = $(".rendezes");

  rendezesElemek.on("change", function () {
    const irany = $(this).val(); // Az aktuális rendezés irányának lekérése
    // Az irány alapján meghívjuk a megfelelő rendezési függvényt
    if (irany === "novekvo") {
      lista = rendezesNovekvo(lista, irany);
    } else if (irany === "csokkeno") {
      lista = rendezesCsokkeno(lista, irany);
    }

    // Frissítjük a listát a rendezett adatokkal
    init(lista);
  });
}

export function rendezesKattintSuly(lista) {
  const rendezesElemek = $(".rendezes");

  rendezesElemek.on("change", function () {
    const irany = $(this).val(); // Az aktuális rendezés irányának lekérése
    // Az irány alapján meghívjuk a megfelelő rendezési függvényt
    if (irany === "novekvoSuly") {
      lista = rendezesNovekvo(lista, irany);
    } else if (irany === "csokkenoSuly") {
      lista = rendezesCsokkeno(lista, irany);
    }

    // Frissítjük a listát a rendezett adatokkal
    init(lista);
    console.log(lista);
  });
}
/*
function rendeesKattintNovekvo(lista){
  const rendezesElem=$(".novekvo");
  rendezesElem.on("change", function(){
    const LISTA= rendezesNovekvo(lista, "novekvo");
    init(LISTA);
  });
}

function rendeesKattintCsokkeno(lista){
  const rendezesElem=$(".csokkeno");
  rendezesElem.on("change", function(){
    const LISTA= rendezesCsokkeno(lista, "csokkeno");
    init(LISTA);
  });
}
*/
function kosarGombKatt(){
  const kosarbaGomb=$(".kosarbaGomb");
  console.log(kosarbaGomb);
  kosarbaGomb.on("click", function(){
    const termekIndex = $(this).data("index");

    console.log(termekIndex);
  })
}




/*//cahtgpt
$(document).on("click", ".kosarbaGomb", function () {
  const index = $(this).data("index"); // az aktuális termék indexe
  const termek = macskaLISTA[index]; // az aktuális termék adatai
  // Hozzáadjuk a terméket a kosár listához
  kosarLista.push({
    nev: termek.nev,
    mennyiseg: 1, // alapértelmezetten 1 darab van a kosárban
    ar: termek.ar,
  });
  console.log(kosarLista);
});

function kosarGombKatt(lista) {
  const kosarGomb = $(".kosarGomb");
  kosarGomb.on("click", function () {
    const termekIndex = kosarGomb.val();
    kosarLista = lista[termekIndex];
    return termekIndex;
  });
}
*/