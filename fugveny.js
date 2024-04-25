import {  macskaLISTA} from "./adatok.js";
/*export function tablazatOsszealit(lista){
    const tablaTaroloELEM=$(".tablaTarolo");
    let txt="<table>";
    for (let index = 0; index < lista.lenght; index++) {
        txt+=`<tr>
            <td></td>
            <td></td>
        </tr>`
    }
    console.log(tablaTaroloELEM);
    return txt;
}*/


export function kartyaOsszeallit(macskaLISTA){
    const kartyaTarolo=$(".kartyaTarolo");
    let kartyaTxt=` <div class="table-responsive-md">
    <div class="container mt-3">`;
    macskaLISTA.forEach(macska,i) => {
    
    }); {
        kartyaTxt+=`
        <div class="container mt-3">
        <h2>${macskaLISTA[index].nev}</h2>
        <p>Image at the top (card-img-top):</p>
        <div class="card" style="width:400px">
        <img class="card-img-top" src="${macskaLISTA[index].kep}" alt="Card image" style="width:100%">
        <div class="card-body">
        <h4 class="card-title"></h4>
        <p class="card-text">${macskaLISTA[index].termekLeiras}</p>
        <a href="#" class="btn btn-primary">${macskaLISTA[index].ar}</a>
        <a href="#" class="btn btn-primary">Kosára</a>
        </div>
        </div>
        `
    }
    kartyaTarolo.html(kartyaTxt);
    
    
}