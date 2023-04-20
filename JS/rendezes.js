export function rendezesObjektum(lista, kulcs, irany) {
  rendezesSzovegSzerint(lista, kulcs, irany);

}

function rendezesSzovegSzerint(lista, kulcs, irany) {
  let eredmeny;
  lista.sort(function (a, b) {
    if (a[kulcs] > b[kulcs]) {/**<> kell ide  szám nál kell kivonni */
      eredmeny = 1;
    } else {
      eredmeny = -1;
    }
    eredmeny *= irany;
    return eredmeny;
  });
}
// nincs erre szükség itt.
function rendezesSzamSzerint(lista, kulcs) {
  lista.sort(function (a, b) {
    return a[kulcs] - b[kulcs];
  });
}
