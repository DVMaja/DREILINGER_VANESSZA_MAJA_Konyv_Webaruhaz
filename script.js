import { OBJEKTUMLISTA } from "./adatok.js";

$(function () {
    //const articleTablazat = $('.tablazat');

    tablazatLetrehozas();
})

function tablazatLetrehozas() {
    let tablazat = "<table class=\"table table-striped\">";

    tablazat += "<tr class=\"table-dark\"> <th> Név </th> <th> Kor </th> <th> fajta </th><th></th></tr>";
    for (let index = 0; index < OBJEKTUMLISTA.length; index++) {
        tablazat += "<tr>";
        tablazat += "<td>" + OBJEKTUMLISTA[index].név + "</td>" +
            "<td>" + OBJEKTUMLISTA[index].kor + "</td>" +
            "<td>" + OBJEKTUMLISTA[index].fajta + "</td>" +
            "<td> Törlés </td>";
        tablazat += "</tr>";
    }
    tablazat += "</table>";
    $('.tablazat').prepend(tablazat);

}