import { OBJEKTUMLISTA } from "../adatok.js";

$(function () {
  kezdoFuggveny(OBJEKTUMLISTA);
});

function kezdoFuggveny(OBJEKTUMLISTA) {
  const taroloElem = $("article");
  $("article").html(divekOsszerak(OBJEKTUMLISTA));

  let modalButton = $(".modalGomb");

  modalButton.on("click", function () {
    $("#myModal").html(kartyakModalja(OBJEKTUMLISTA));
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
      if (key == "cim") {
        text += `<div class="card-header text-bg-success"><h2><span id="S${key}"> ${element} </span></h2></div>`;
      } else {
        if (key == "kep") {
          text += `<div class="card-body"><img src="${element}" alt="kép"></div>`;
        } else {
          text += `<div class="card-body"><p><span id="S${key}"> ${element} </span></p></div>`;
        }
      }
    }
    text += `<div class="card-footer">
    <button type="button" id="${index}" class="btn btn-dark modalGomb" data-bs-toggle="modal" data-bs-target="#myModal">Gomb</button></div>`;

    text += `</div>`;
  }
  text += "</div>";
  text += "</div>";

  return text;
}

function kartyakModalja(lista) {
  let megjelenitendo = event.target.id;

  console.log(megjelenitendo);
  let modal = `<div class="modal-content">`;

  for (const key in lista[megjelenitendo]) {
    const element = lista[megjelenitendo][key];
    //console.log(element);

    if (key == "nev") {
      modal += `<div class="modal-header">
          <h4 class="modal-title"><span id="S${key}">${element}</span></h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>`;
    } else {
      modal += `<div class="modal-body">
          <p><span id="S${key}">${element}</span></p></div>`;
    }
  }
  modal += `<div class="modal-footer">
      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button> </div>`;

  modal += `</div>`;
  //console.log(modal);

  return modal;
}
