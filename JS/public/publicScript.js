import { OBJEKTUMLISTA } from "../adatok.js";

$(function () {
  kezdoFuggveny(OBJEKTUMLISTA);
});

function kezdoFuggveny(OBJEKTUMLISTA) {
  const taroloElem = $("article");
  $("article").html(divekOsszerak(OBJEKTUMLISTA));

  let modalButton = $(".modalGomb");

  modalButton.on("click", function () {
    modalButton;
    let keresettElem = OBJEKTUMLISTA.indexOf(modalButton);
    kartyakModalja(OBJEKTUMLISTA);
  });
}

function divekOsszerak(lista) {
  let text = `<div class="tarolo">`;
  text += `<div class="row">`;

  for (let index = 0; index < lista.length; index++) {
    const object = lista[index];
    text += `<div class="card  col-md-3">`;
    for (const key in object) {
      const element = object[key];
      if (key == "nev") {
        text += `<div class="card-header text-bg-success"><h2><span id="S${key}"> ${element} </span></h2></div>`;
      } else {
        text += `<div class="card-body"><p><span id="S${key}"> ${element} </span></p></div>`;
      }
    }
    text += `<div class="card-footer">
    <button type="button" class="btn btn-dark modalGomb" data-bs-toggle="modal" data-bs-target="#myModal">Gomb</button></div>`;

    text += `</div>`;
  }
  text += "</div>";
  text += "</div>";
  return text;
}

function kartyakModalja(lista) {  
  let index = 0;
  let modal;
  if (true) {
    modal += `<div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

     
      <div class="modal-body">
        Modal body..
      </div>

      
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>`;
  } 
  return modal;
}
