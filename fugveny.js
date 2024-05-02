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

    let kartyaTxt = "";

    macskaLISTA.forEach((macska) => {
        kartyaTxt += `
        <div class="col-md-4" style="padding-top:30px; " >
                <div class="card mb-3" style="width: 300px;  background-color: #BB5528;">
                    <h2 style="color:white; padding:20px;">${macska.nev}</h2>
                    <img class="card-img-top" src="${macska.kep}" alt="Kártya kép" style="width:100%; height:200px; padding:10px; ">
                    <div class="card-body">
                        <h4 class="card-title"></h4>
                        <p class="card-text" style="color:white;">${macska.termekleiras}</p>
                        <p class="card-text" style="color:white;">Tulajdonságai:<br>Születési éve: ${macska.szul_ev}<br> Színe:${macska.szin}<br> Súlya: ${macska.suly}</p>
                        <a href="#" class="btn btn-primary" style="background-color: #F66513; border-color: #F66513">${macska.ar} Ft</a>
                        <a href="#" class="btn btn-primary" style="background-color: #F66513; border-color: #F66513" class=".kosarbaGomb">Kosárba</a>
                    </div>
                </div>
            </div>`;
    });
    
    // Ezen a ponton bezárjuk az első div elemet, amely tartalmazza a kártyákat
   
    return kartyaTxt;
    
}

export function megjelenit(txt){
    const kartyaTarolo = $(".kartyaTarolo");
    kartyaTarolo.html(txt)
}


