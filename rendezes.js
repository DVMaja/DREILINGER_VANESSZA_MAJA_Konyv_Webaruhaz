export function rendezesObjektum(lista, kulcs) {
  if (typeof kulcs == "number") {
    rendezesSzamSzerint(lista, kulcs);
  } else {
    rendezesSzovegSzerint(lista, kulcs);
  }
}

function rendezesSzovegSzerint(lista, kulcs) {
  console.log(lista);
  lista.sort(function (a, b) {    
    if (a[kulcs] > b[kulcs]) {/**<> kell ide  szám nál kell kivonni */
      return 1;
    } else {
      return -1;
    }
  });
}

function rendezesSzamSzerint(lista, kulcs) {
  lista.sort(function (a, b) {    
    return a[kulcs] - b[kulcs];
  });
}
