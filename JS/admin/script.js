import { OBJEKTUMLISTA, kulcsLista } from "../adatok.js";

import { rendezesObjektum } from "../rendezes.js";

import { validalas } from "../valid.js";

let kattSzamlalo = 1;
//itt tartjuk számon ogy milyen irányba rendezzük

$(function () {
  kezdoFuggveny();
});
function kezdoFuggveny() {
  //const articleTablazat = $('.tablazat');
  $(".tablazat").html(tablazatLetrehozas(OBJEKTUMLISTA));
  let thElem = $("th");

  thElem.on("click", function () {
    let kulcs = $(event.target).attr("id");
    rendezesObjektum(OBJEKTUMLISTA, kulcs, kattSzamlalo);
    kattSzamlalo *= -1;
    kezdoFuggveny();
  });
  //console.log(OBJEKTUMLISTA[0]);


  let torlesElem = $(".torles");
  torlesElem.on("click", function () {
    let torlendo = event.target.id;
    OBJEKTUMLISTA.splice(torlendo, 1);
    //console.log(OBJEKTUMLISTA);
    kezdoFuggveny();
  });


  let ujElem = $(".ujElemHoz");
  ujElem.on("click", function () {
    //console.log(ujElem);

    let ujElemEloH = $(".ujElemLetrehoz");
    ujElemEloH.toggleClass("elrejt");

    let submitGomb = $(".button");
    let aktForm = $(".ujArray");

    let urlap = $(".ujArray");

    urlap.submit(function (event) {
      event.preventDefault(submitGomb);

      let elsoAdat = $("#nev").val();
      let masodikAdat = $("#fajta").val();
      let harmadikAdat = $("#kor").val();

      let ujAdatsor = { nev: elsoAdat, fajta: masodikAdat, kor: harmadikAdat }

      OBJEKTUMLISTA.push(ujAdatsor);
      //console.log(OBJEKTUMLISTA);     
      kezdoFuggveny();

    })
  })


  /*let szerkElem = $(".szerkeszt");
  szerkElem.on("click", function () {
    console.log(szerkElem);
    //findIndex
    // meg kell hívnia a modosítós mezőt a táblázat fölé, és ott lehessen modosítani.
    modositoMezo(OBJEKTUMLISTA);
    let modositoElem = $(".modositas");
    $(".modositas").html(modositoMezo(OBJEKTUMLISTA));   
    
  });*/
}


function tablazatLetrehozas(lista) {
  let tablazat = "<div class='table-responsive'>";
  tablazat += '<table class="table table-striped">';
  tablazat += "<thead class='table-dark'> <tr>";

  for (const key in kulcsLista) {
    /**Alt Gr + 7 = ` */
    tablazat += `<th id="${key}"> ${kulcsLista[key]} </th>`;
  }
  tablazat += "<th></th> <th></th> </tr></thead>";

  for (let index = 0; index < lista.length; index++) {
    tablazat += `<tr id="tr${index}">`;
    const object = lista[index];

    for (const key in object) {
      const element = object[key];
      tablazat += `<td ><span id="S${key}"> ${element} </span></td>`;
    }
    tablazat += `<td><button id="${index}" class="torles btn btn-danger" type="button">Törlés</button></td> 
      <td><button id="${index}" class="szerkeszt btn btn-success" type="button">Szerkesztés</button></td></tr>`;
  }
  tablazat += "</table> </div>";
  return tablazat;
}


function rendezettKiiras(lista) {
  const tbodyElem = $(".tablazat tbody");
  tbodyElem.empty();
  /**^ Ezzel kiürítjük a táblázatot */
  let tdElem;

  for (let index = 0; index < lista.length; index++) {
    const object = lista[index];
    let trElem = $("<tr>").attr("id", `tr${index}`);

    for (const key in object) {
      const element = object[key];
      tdElem = $("<td>").html(`<span id="S${key}">${element}</span>`);
      trElem.append(tdElem);
    }
    tdElem += `<td><button id=\"${index}\" class=\"torles btn btn-danger\" type=\"button\">Törlés</button></td></tr>`;
    trElem.append(tdElem);
    tdElem += `<td><button id="${index}" class="szerkeszt btn btn-success" type="button">Szerkesztés</button></td></tr>`;
    trElem.append(tdElem);

    tbodyElem.append(trElem);
  }
}


/* function modositoMezo(OBJEKTUMLISTA) {
  let szoveg= "<form action=\"#\">";
  for (const key in object) {
    const element = object[key];
    tablazat += `<td ><span id="S${key}"> ${element} </span></td>`;
  }
  szoveg += "</form>";
  return szoveg;
}
 */