import { OBJEKTUMLISTA} from "../adatok.js";

$(function () {
  kezdoFuggveny(OBJEKTUMLISTA);
});

function kezdoFuggveny(OBJEKTUMLISTA) {
  const taroloElem = $("article");
  $("article").html(divekOsszerak(OBJEKTUMLISTA));

}

function divekOsszerak(OBJEKTUMLISTA) {  
  let text = `<div class="tarolo row">`;

  for (let index = 0; index < OBJEKTUMLISTA.length; index++) {
    text += `<div class="part">
    <ul class="list-group">`;

    text += `<li class="list-group-item"><h2>Neve</h2></li>
    <li class="list-group-item"><p>Fajta, kora</p></li>
    <li class="list-group-item"><button>Gomb</button></li>`;

    text += "</ul><div>";
  }
  text += "</div>";
  console.log(text);
  return text;
}