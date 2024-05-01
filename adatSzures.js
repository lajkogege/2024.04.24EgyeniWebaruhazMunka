
export function szuresNevSzerint(lista, szurtSzoveg){
    const szurtLista = lista.filter(function(elem){
        return elem.nev.includes(szurtSzoveg);
    });
    return szurtLista;
}

export function szuresArSzerint(lista, szuroAr){
    const szurtLista = lista.filter(function(elem){
        return elem.ar.includes(szuroAr);
    });
    return szurtLista;
}