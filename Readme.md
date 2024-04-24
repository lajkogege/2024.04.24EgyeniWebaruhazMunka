#Webáruház

##Speciifikáció
Webáruház készitése publikus felülete.
Addot termékeket egy objektumba tárojuk, 3 adattal: TermékNeve, TermékÁra, TermékLeírás


1. A publikus felületen div-ekben jelenítsük meg az adatokat. az előzetes minta alapján! 
2. Figyelj a rezponzivitásra!
3. Az oldalon legyen szűrési és rendezési lehetőség pl:keresés névben, leírásban, szűrés kategória szerint, bizonyos árnál olcsobb vagy drágább
4. Rendezési lehetőség, pl. ár szerint nővekvő, csökkenő
5. Kosár funkció:  A publikus felületen a terméket helyezheted a kosárba. A kosárban lévő termékeket listázhatod, törölheted, módosíthatod az elemszámát, majd leadhatod a rendelést!
7. ++ Rendelés összeálitása PDF-ben
8. ++ Egyetlen termék megjelenítése: Minden termékhez (divhez) tartozik egy gomb, amivel meg tudjuk nézni azt az egyetlen terméket.
9. ++ A kiemelt termékek mellet megjelenik egy bal és egy jobb léptető gomb, amivel léptetni tudjuk a terméket.


##Almalkamazott fügvények
**fugvenyeve(par1,par2)->visszateresiErtek**:
1-2 mondatban a fügvény leírása

Összeállit: fugveny.js
**tablazatOsszealit(adatokLista)-->txt**
--Összeálitja a táblázott
**kartyaOsszeallit(adatokLista, txt)-->txt**
--Összeálitja a kárytákat
**megjelenit(txt, szuloElem)**
--Megjeleniti a txt-be irt táblázatot, és kártyákat

Szűrések: adatSzures.js
**szuresNevSzerint(adatokLista, szurtSzoveg)-->szurtLista**
--AdatokListábol a beviteli mezobol megadott név  szerinti szűrés
**szuresArSzerint(adatokLista, szurtAr )-->szurtLista**
--AdatokListábol a beviteli mezobol megadott ár kisebb vagy nagyobb

Rendezés:adatRendez.js
**rendzesKattint(rendezesLista)**
--Rendezés menüből kiválasztott rendezésre kattintva hivja meg ami szerint rendezni akarunk, rendezesLista listábol kapja meg mi szerint rendezönk, 
és ez kattintással meg hiv egy másik fügvényt
**novekvoArRend(adatokLista)-->arakNovekvobe**
--ezt egy eséményy hivja meg kattintásra, árakat Növekvő sorrendben rendezi
**csokenoArRend(adatokLista)-->arakCsokkenobe**
--ezt egy esemény hivja meg kattintásra, érakat Csökkenő sorrendben helyezi

Kosár:
**kosarbaHelyezes(adatokLista)-->kosarLista**
--kattintáskor egy eseménytz hiv meg ami a kiválasztott terméket az adatook listábol a kosasListaba tesszi
**termekTorles(kosarLista)-->kosarlista**
--ha rákatintunk a terméket törli a listábol
**termekElemszamModositas(kosarLista)**
--ha rákattuntnk a megrendelt termék számát növeli vagy csökkeni
**rendelésLeadás()**


