import { OBJEKTUMLISTA} from "../adatok.js";

$(function () {
  kezdoFuggveny(OBJEKTUMLISTA);
});

function kezdoFuggveny(OBJEKTUMLISTA) {
  const taroloElem = $("article");
  $("article").html(divekOsszerak(OBJEKTUMLISTA));

}

function divekOsszerak(lista) {  
  let text = `<div class="tarolo">`;
  text += `<div class="card row">`;

  for (let index = 0; index < lista.length; index++) {    
    const object = lista[index];
    for (const key in object) {
      const element = object[key];
      //<span id="S${key}"> ${element} </span>      
    }
    text += `<div class="row">`;
    text += `<div class="card-header col-md-3"><h2>Neve</h2></div>
    <div class="card-body col-md-3"><p>Fajta: </p></div>
    <div class="card-body col-md-3">Kora: </div>
    <div class="card-footer col-md-3"><button>Gomb</button></div>`;   
    text += `</div>`
  }
  text += "</div>";
  text += "</div>";
  //console.log(text);
  return text;
}