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


//Bayonetta Slideshow//


var bayonettaArray = [
    './images/boxart/bayonetta.jpg',
    './images/boxart/bayonetta2OfficialArt.jpg'],
    bayoIndex = 0;
    imgDuration = 5000;

function bayonettaSlideShow() {
    document.getElementById('bayonetta-images').src = bayonettaArray[bayoIndex];
    bayoIndex++;
    if (bayoIndex == bayonettaArray.length) { bayoIndex = 0; }
    setTimeout("bayonettaSlideShow()", imgDuration);
}
bayonettaSlideShow();


//Dead Cells Slideshow//


var deadCellsArray = [
    './images/boxart/deadCells.jpg',
    './images/boxart/deadCells2.png',
    './images/boxart/deadCells3.jpg'],
    deadCellsIndex = 0;
    imgDuration = 5000;

function deadCellsSlideShow() {
    document.getElementById('dead-cells-images').src = deadCellsArray[deadCellsIndex];
    deadCellsIndex++;
    if (deadCellsIndex == deadCellsArray.length) { deadCellsIndex = 0; }
    setTimeout("deadCellsSlideShow()", imgDuration);
}
deadCellsSlideShow();


//Devil May Cry Slideshow//


var devilMayCryArray = [
    './images/boxart/dmc1.jpg',
    './images/boxart/dmc3.jpg',
    './images/boxart/dmc4.jpg',
    './images/boxart/dmc5.jpg'],
    devilMayCryIndex = 0;
    imgDuration = 5000;

function devilMayCrySlideShow() {
    document.getElementById('dmc-images').src = devilMayCryArray[devilMayCryIndex];
    devilMayCryIndex++;
    if (devilMayCryIndex == devilMayCryArray.length) { devilMayCryIndex = 0; }
    setTimeout("devilMayCrySlideShow()", imgDuration);
}
devilMayCrySlideShow();


//Doom Slideshow//


var doomArray = [
    './images/boxArt/doom.jpg',
    './images/boxArt/doom2.jpg',
    './images/boxArt/doom3.jpg'],
    doomIndex = 0;
    imgDuration = 5000;

function doomSlideShow() {
    document.getElementById('doom-images').src = doomArray[doomIndex];
    doomIndex++;
    if (doomIndex == doomArray.length) { doomIndex = 0; }
    setTimeout("doomSlideShow()", imgDuration);
}
doomSlideShow();


//God Hand Slideshow//


var godHandArray = [
    './images/boxArt/godHand.jpg',
    './images/boxArt/godHand2.jpg',
    './images/boxArt/godHand3.jpg'],
    godHandIndex = 0;
    imgDuration = 5000;

function godHandSlideShow() {
    document.getElementById('godHand-images').src = godHandArray[godHandIndex];
    godHandIndex++;
    if (godHandIndex == godHandArray.length) { godHandIndex = 0; }
    setTimeout("godHandSlideShow()", imgDuration);
}
godHandSlideShow();


//Vanquish Slideshow//


var vanquishArray = [
    './images/boxArt/vanquish.jpg',
    './images/boxArt/vanquish2.jpg'],
    vanquishIndex = 0;
    imgDuration = 5000;

function vanquishSlideShow() {
    document.getElementById('vanquish-images').src = vanquishArray[vanquishIndex];
    vanquishIndex++;
    if (vanquishIndex == vanquishArray.length) { vanquishIndex = 0; }
    setTimeout("vanquishSlideShow()", imgDuration);
}
vanquishSlideShow();


//Superhot Slideshow//


var superhotArray = [
    './images/boxArt/superhot.jpg',
    './images/boxArt/superhot2.jpg'],
    superhotIndex = 0;
    imgDuration = 5000;

function superhotSlideShow() {
    document.getElementById('superhot-images').src = superhotArray[superhotIndex];
    superhotIndex++;
    if (superhotIndex == superhotArray.length) { superhotIndex = 0; }
    setTimeout("superhotSlideShow()", imgDuration);
}
superhotSlideShow();