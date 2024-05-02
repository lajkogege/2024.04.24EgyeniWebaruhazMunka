
export function szuresNevSzerint(lista, szuroSZoveg){
    const szurtLista = lista.filter(function(elem){
        return elem.nev.includes(szuroSZoveg);
    });
    console.log(szurtLista);
    return szurtLista;
}

export function szuresArSzerint(lista, szuroAr){
    const szurtLista = lista.filter(function(elem){
        return elem.ar.includes(szuroAr);
    });
    return szurtLista;
}