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


//Civilization Slideshow//


var civilizationArray = [
    './images/boxArt/civ.jpg',
    './images/boxArt/civ2.jpg',
    './images/boxArt/civ4.jpg',
    './images/boxArt/civ5.jpg'],
    civilizationIndex = 0;
    imgDuration = 5000;

function civilizationSlideShow() {
    document.getElementById('civilization-images').src = civilizationArray[civilizationIndex];
    civilizationIndex++;
    if (civilizationIndex == civilizationArray.length) { civilizationIndex = 0; }
    setTimeout("civilizationSlideShow()", imgDuration);
}
civilizationSlideShow();


//Age of Empires Slideshow//


var aoeArray = [
    './images/boxArt/aoe.jpg',
    './images/boxArt/aoe2.jpg',
    './images/boxArt/aoe3.jpg'],
    aoeIndex = 0;
    imgDuration = 5000;

function aoeSlideShow() {
    document.getElementById('aoe-images').src = aoeArray[aoeIndex];
    aoeIndex++;
    if (aoeIndex == aoeArray.length) { aoeIndex = 0; }
    setTimeout("aoeSlideShow()", imgDuration);
}
aoeSlideShow();


//Starcraft Slideshow//


var scArray = [
    './images/boxArt/starcraft.jpg',
    './images/boxArt/starcraft2.jpg',
    './images/boxArt/starcraft3.jpg'],
    scIndex = 0;
    imgDuration = 5000;

function scSlideShow() {
    document.getElementById('sc-images').src = scArray[aoeIndex];
    scIndex++;
    if (scIndex == scArray.length) { scIndex = 0; }
    setTimeout("scSlideShow()", imgDuration);
}
scSlideShow();


//XCOM Slideshow//


var xcomArray = [
    './images/boxArt/xcom1.jpg',
    './images/boxArt/xcom2.jpg',
    './images/boxArt/xcom3.jpg'],
    xcomIndex = 0;
    imgDuration = 5000;

function xcomSlideShow() {
    document.getElementById('xcom-images').src = xcomArray[xcomIndex];
    xcomIndex++;
    if (xcomIndex == xcomArray.length) { xcomIndex = 0; }
    setTimeout("xcomSlideShow()", imgDuration);
}
xcomSlideShow();


//Into the Breach Slideshow//


var intoTheBreachArray = [
    './images/boxArt/intoTheBreach.jpg',
    './images/boxArt/intoTheBreach2.jpg'],
    intoTheBreachIndex = 0;
    imgDuration = 5000;

function intoTheBreachSlideShow() {
    document.getElementById('into-the-breach-images').src = intoTheBreachArray[intoTheBreachIndex];
    intoTheBreachIndex++;
    if (intoTheBreachIndex == intoTheBreachArray.length) { intoTheBreachIndex = 0; }
    setTimeout("intoTheBreachSlideShow()", imgDuration);
}
intoTheBreachSlideShow();


//FTL: Faster than Light Slideshow//


var ftlArray = [
    './images/boxArt/ftl1.jpg',
    './images/boxArt/ftl2.png',
    './images/boxArt/ftl3.jpg'],
    ftlIndex = 0;
    imgDuration = 5000;

function ftlSlideShow() {
    document.getElementById('ftl-images').src = ftlArray[ftlIndex];
    ftlIndex++;
    if (ftlIndex == ftlArray.length) { ftlIndex = 0; }
    setTimeout("ftlSlideShow()", imgDuration);
}
ftlSlideShow();