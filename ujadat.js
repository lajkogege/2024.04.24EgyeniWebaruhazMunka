
import { init } from "./index.js"

export function adatokListaba(lista) {
    /* összegyűjti az űrlapról az adatokat */
    let adat = {
        nev: "",
        termekleiras: "",
        ar: "",
        szul_ev:0,
        szin:"",
        suly:0,
        kep:""
    }


const submitELEM=$("#submit");
//ha rákatitunk beleteszi a listába
submitELEM.on("click", function(event){
    event.prevenDefault()
    //submit gombról levesszük az alapértelmezett eseménykezelőt 
    // megfogjuk az űrlapmezőket 
    const nevELEM = $("#nev")
    const leirasElem = $("#termekleiras")
    const arElem = $("#ar")
    const szulevELEM=$("#szulev")
    const szinELEM=$("#szin")
    const sulyELEM=("#suly")
    const kepELEM=("#kep")
        adat = {
            nev: nevELEM.val(),
            termekleiras: leirasElem(),
            ar: arElem.val(),
            szul_ev: szulevELEM.val(),
            szin: szinELEM.val(),
            suly: sulyELEM.val(),
            kep: kepELEM.val(),

        }


        const validELEMEK=$(".valid-feedback")
        console.log(validELEMEK.eq(0).css("display"))

        if (validELEMEK.eq(0).css("display")==="block" && validELEMEK.eq(1).css("display")==="block" ) {
             lista.push(adat)          
            init(lista)
        }

    })
}
