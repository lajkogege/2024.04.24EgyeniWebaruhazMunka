
/***rendzesKattint(rendezesLista)**
--Rendezés menüből kiválasztott rendezésre kattintva hivja meg ami szerint rendezni akarunk, rendezesLista listábol kapja meg mi szerint rendezönk, 
és ez kattintással meg hiv egy másik fügvényt*/
export function rendezesNovekvo(lista, irany){
    console.log(irany);
    lista.sort(function(a,b){
        return a.ar -b.ar;
    })
    return lista;
}

export function rendezesCsokkeno(lista, irany){
    console.log(irany);
    lista.sort(function(a,b){
        return b.ar -a.ar;
    })
    return lista;
}