import { OBJEKTUMLISTA} from "../adatok.js";

$(function () {
  kezdoFuggveny(OBJEKTUMLISTA);
});

function kezdoFuggveny(OBJEKTUMLISTA) {
  $(".tarolo").html(divekOsszerak(OBJEKTUMLISTA));

}
function divekOsszerak(OBJEKTUMLISTA) {
  const taroloElem = $("article");
  let text = `<div class="tarolo row">`;

  for (let index = 0; index < OBJEKTUMLISTA.length; index++) {
    text += `<div class="part">
    <ul class="list-group">`;

    text += `<li class="list-group-item"><h2>Neve</h2><</li>`;
    text += `<li class="list-group-item"><p>Fajta, kora</p></li>`;
    text += `<li class="list-group-item"><p><button>Gomb</button></p></li>`;

    text += "</ul><div>";
  }
  text += "</div>";
  //console.log(text);
  return text;
}