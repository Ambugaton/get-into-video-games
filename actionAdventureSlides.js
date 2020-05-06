//////////////////////////////////////////
//                                      //
//          Search Function             //
//                                      //
//////////////////////////////////////////

$(document).ready(function(){

    $("#myInput").on("keyup", function() {
        // search text has changed
        var query = $(this).val().toLowerCase();

        $("div.showcase-item").each(function( index ) {
        // check each div for the text in the <p> tag
        var p = $(this).find('p').text();

        var match = p.toLowerCase().indexOf(query) > -1;
        if (match) {
            $(this).show();
        } else {
            $(this).hide();
        }
        });
    });
});


//////////////////////////////////////////
//                                      //
//      Slideshow Array Functions       //
//                                      //
//////////////////////////////////////////


//Legend of Zelda Slideshow//


var legendOfZeldaArray = [
    './images/boxArt/legendOfZelda.jpg',
    './images/boxArt/legendOfZelda2.jpg',
    './images/boxArt/legendOfZelda3.jpg',
    './images/boxArt/legendOfZelda4.jpg'],
    legendOfZeldaIndex = 0;
    imgDuration = 5000;

function legendOfZeldaSlideShow() {
    document.getElementById('legend-of-zelda-images').src = legendOfZeldaArray[legendOfZeldaIndex];
    legendOfZeldaIndex++;
    if (legendOfZeldaIndex == legendOfZeldaArray.length) { legendOfZeldaIndex = 0; }
    setTimeout("legendOfZeldaSlideShow()", imgDuration);
}
legendOfZeldaSlideShow();


//Batman Arkham Asylum Slideshow//


var batmanArkhamAsylumArray = [
    './images/boxArt/batmanArkhamAsylum.jpg',
    './images/boxArt/batmanArkhamAsylum2.jpg'],
    batmanArkhamAsylumIndex = 0;
    imgDuration = 5000;

function batmanArkhamAsylumSlideShow() {
    document.getElementById('batman-images').src = batmanArkhamAsylumArray[batmanArkhamAsylumIndex];
    batmanArkhamAsylumIndex++;
    if (batmanArkhamAsylumIndex == batmanArkhamAsylumArray.length) { batmanArkhamAsylumIndex = 0; }
    setTimeout("batmanArkhamAsylumSlideShow()", imgDuration);
}
batmanArkhamAsylumSlideShow();


//God of War 4 Slideshow//


var godOfWarArray = [
    './images/boxArt/godOfWar1.png',
    './images/boxArt/godOfWar4.jfif'],
    godOfWarIndex = 0;
    imgDuration = 5000;

function godOfWarSlideShow() {
    document.getElementById('god-of-war-images').src = godOfWarArray[godOfWarIndex];
    godOfWarIndex++;
    if (godOfWarIndex == godOfWarArray.length) { godOfWarIndex = 0; }
    setTimeout("godOfWarSlideShow()", imgDuration);
}
godOfWarSlideShow();


//Bioshock Slideshow//


var bioshockArray = [
    './images/boxArt/bioshock.jpg',
    './images/boxArt/bioshock2.jpg'],
    bioshockIndex = 0;
    imgDuration = 5000;

function bioshockSlideShow() {
    document.getElementById('bioshock-images').src = bioshockArray[bioshockIndex];
    bioshockIndex++;
    if (bioshockIndex == bioshockArray.length) { bioshockIndex = 0; }
    setTimeout("bioshockSlideShow()", imgDuration);
}
bioshockSlideShow();


//Red Dead Slideshow//


var redDeadArray = [
    './images/boxArt/redDeadRedemption.jpg',
    './images/boxArt/redDeadRedemption2.jpg'],
    redDeadIndex = 0;
    imgDuration = 5000;

function redDeadSlideShow() {
    document.getElementById('red-dead-images').src = redDeadArray[redDeadIndex];
    redDeadIndex++;
    if (redDeadIndex == redDeadArray.length) { redDeadIndex = 0; }
    setTimeout("redDeadSlideShow()", imgDuration);
}
redDeadSlideShow();


//The Last of Us Slideshow//


var tlouArray = [
    './images/boxArt/theLastOfUs.jpg',
    './images/boxArt/theLastOfUs2.jpg'],
    tlouIndex = 0;
    imgDuration = 5000;

function tlouSlideShow() {
    document.getElementById('tlou-images').src = tlouArray[tlouIndex];
    tlouIndex++;
    if (tlouIndex == tlouArray.length) { tlouIndex = 0; }
    setTimeout("tlouSlideShow()", imgDuration);
}
tlouSlideShow();


//Okami Slideshow//


var okamiArray = [
    './images/boxArt/okami.png',
    './images/boxArt/okami2.jpg'],
    okamiIndex = 0;
    imgDuration = 5000;

function okamiSlideShow() {
    document.getElementById('okami-images').src = okamiArray[redDeadIndex];
    okamiIndex++;
    if (okamiIndex == okamiArray.length) { okamiIndex = 0; }
    setTimeout("okamiSlideShow()", imgDuration);
}
okamiSlideShow();


//Dark Souls Slideshow//


var darkSoulsArray = [
    './images/boxArt/darkSouls.webp',
    './images/boxArt/darkSouls2.jpg'],
    darkSoulsIndex = 0;
    imgDuration = 5000;

function darkSoulsSlideShow() {
    document.getElementById('dark-souls-images').src = darkSoulsArray[darkSoulsIndex];
    darkSoulsIndex++;
    if (darkSoulsIndex == darkSoulsArray.length) { darkSoulsIndex = 0; }
    setTimeout("darkSoulsSlideShow()", imgDuration);
}
darkSoulsSlideShow();