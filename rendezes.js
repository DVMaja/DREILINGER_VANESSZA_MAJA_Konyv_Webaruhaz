export function rendezesSzoveg(lista){
    lista.sort();
}

export function rendezesSzam(lista){
    lista.sort(function(x, y){
        return x - y;
    })
}