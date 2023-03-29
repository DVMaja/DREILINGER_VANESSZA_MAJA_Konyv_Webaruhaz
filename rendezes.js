export function rendezesObjektum(lista, kulcs) {
  if (typeof kulcs == "number") {
    rendezesSzamSzerint(lista, kulcs);
  } else {
    rendezesSzovegSzerint(lista, kulcs);
  }
}

function rendezesSzovegSzerint(lista, kulcs) {
  lista.sort(function (a, b) {
    //onsole.log(a, b);
    if (a[kulcs] - b[kulcs]) {
      return 1;
    } else {
      return -1;
    }
  });
}

function rendezesSzamSzerint(lista, kulcs) {
  lista.sort(function (a, b) {
    //console.log(a, b);
    return a[kulcs] - b[kulcs];
  });
}
