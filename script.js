import { OBJEKTUMLISTA, kulcsLista } from "./adatok.js";
import { rendezesObjektum } from "./rendezes.js";

$(function () {
  //const articleTablazat = $('.tablazat');
  $(".tablazat").html(tablazatLetrehozas(OBJEKTUMLISTA));
  let kulcs = $(event.target).attr("id");
  let thElem = $("");
   thElem.on("click", rendezesObjektum(lista, kulcs));
});

function tablazatLetrehozas(lista) {
  let tablazat = "<div class='table-responsive'>";
  tablazat += '<table class="table table-striped">';
  tablazat += "<thead class='table-dark'> <tr>";

  for (const key in kulcsLista) {
    /**Alt Gr + 7 = ` */
    tablazat += `<th id="${key}"> ${kulcsLista[key]} </th>`;
  }
  tablazat += "<th></th></tr></thead>";

  for (let index = 0; index < lista.length; index++) {
    tablazat += `<tr id="tr${index}">`;
    const object = lista[index];

    for (const key in object) {
      const element = object[key];
      tablazat += `<td ><span id="S${key}"> ${element} </span></td>`;
    }
    tablazat += "<td></td></tr>";
  }
  tablazat += "</table> </div>";
  return tablazat;
}
/**Kattintásra rendez*/
/**
 * 0. létrejött a kód minden fejlécnek van egy id je
 *1. megfogjuk a th elemeket
 * 2. Ráteszünk egy esménykezelőt.
 * 3. Eseménykezelőben lekérjük a kezelő elem id-ját
 */
