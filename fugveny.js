import {  kosarLista, macskaLISTA} from "./adatok.js";

export function tablazatOsszealit(kosarKLista) {
    const tablaTaroloELEM = $(".tablaTarolo");
    let kosarTxt = `<table class="kosarTabla">`;

    kosarKLista.forEach((kosarELEM) => {
        kosarTxt += `
            <tr>
                <td>Termék neve: ${kosarELEM.nev}</td>
                <td>Mennyiség: ${kosarELEM.mennyiseg}</td>
                <td>Ár: ${kosarELEM.ar}</td>
            </tr>
        `;
    });

    // Összesített ár kiszámítása
    let osszeg = 0;
    kosarKLista.forEach((kosarELEM) => {
        osszeg += kosarELEM.mennyiseg * kosarELEM.ar;
    });

    kosarTxt += `
        <tr>
            <td colspan="3" style="text-align: right;">Összesen: ${osszeg}</td>
        </tr>
    `;
    kosarTxt += "</table>";
    tablaTaroloELEM.html(kosarTxt);
}



export function kartyaOsszeallit(macskaLISTA) {

    let kartyaTxt = `<div class="kartyaTarolo ">`;

    macskaLISTA.forEach((macska) => {
        kartyaTxt += `
        <div class="col-md-6" style="padding-top:30px; margin: auto;" >
                <div class="card mb-3" style="width: 400px;  background-color: #BB5528;">
                    <h2 style="color:white; padding:20px;">${macska.nev}</h2>
                    <img class="card-img-top" src="${macska.kep}" alt="Kártya kép" style="width:100%; padding:10px; ">
                    <div class="card-body">
                        <h4 class="card-title"></h4>
                        <p class="card-text" style="color:white;">${macska.termekleiras}</p>
                        <a href="#" class="btn btn-primary" style="background-color: #F66513; border-color: #F66513">${macska.ar}</a>
                        <a href="#" class="btn btn-primary" style="background-color: #F66513; border-color: #F66513" class=".kosarbaGomb">Kosárba</a>
                    </div>
                </div>
            </div>`;
    });
    
    // Ezen a ponton bezárjuk az első div elemet, amely tartalmazza a kártyákat
    kartyaTxt += `</div>`;
    return kartyaTxt;
    
}

export function megjelenit(txt){
    const kartyaTarolo = $(".kartyaTarolo");
    kartyaTarolo.html(txt)
}
