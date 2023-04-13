import { OBJEKTUMLISTA } from "../adatok.js";

$(function () {
  kezdoFuggveny(OBJEKTUMLISTA);
});

function kezdoFuggveny(OBJEKTUMLISTA) {
  const taroloElem = $("article");
  $("article").html(divekOsszerak(OBJEKTUMLISTA));
}

function divekOsszerak(lista) {
  let text = `<div class="tarolo">`;
  text += `<div class="row">`;

  for (let index = 0; index < lista.length; index++) {
    const object = lista[index];
    text += `<div class="card  col-md-3">`;
    for (const key in object) {
      const element = object[key];
      //<span id="S${key}"> ${element} </span>
      if (key == "nev") {
        text += `<div class="card-header text-bg-success"><h2><span id="S${key}"> ${element} </span></h2></div>`;
      } else {
        text += `<div class="card-body"><p><span id="S${key}"> ${element} </span></p></div>`;
    ;
      }
    }
    text += `<div class="card-footer "><button type="button" class="btn btn-dark">Gomb</button></div>`;

    text += `</div>`;
  }
  text += "</div>";
  text += "</div>";
  //console.log(text);
  return text;
}
