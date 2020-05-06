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


//Binding of Isaac Slideshow//


var bindingOfIsaacArray = [
    './images/boxArt/bindingOfIsaac.jpg',
    './images/boxArt/bindingOfIsaac2.jpg'],
    bindingOfIsaacIndex = 0;
    imgDuration = 5000;

function bindingOfIsaacSlideShow() {
    document.getElementById('binding-of-isaac-images').src = bindingOfIsaacArray[bindingOfIsaacIndex];
    bindingOfIsaacIndex++;
    if (bindingOfIsaacIndex == bindingOfIsaacArray.length) { bindingOfIsaacIndex = 0; }
    setTimeout("bindingOfIsaacSlideShow()", imgDuration);
}
bindingOfIsaacSlideShow();


//Diablo Slideshow//


var diabloArray = [
    './images/boxArt/diablo.jpg',
    './images/boxArt/diablo2.jpg',
    './images/boxArt/diablo3.jpg'],
    diabloIndex = 0;
    imgDuration = 5000;

function diabloSlideShow() {
    document.getElementById('diablo-images').src = diabloArray[diabloIndex];
    diabloIndex++;
    if (diabloIndex == diabloArray.length) { diabloIndex = 0; }
    setTimeout("diabloSlideShow()", imgDuration);
}
diabloSlideShow();


//Divinity: Original Sin II Slideshow//


var dos2Array = [
    './images/boxArt/divinityOriginalSin2.jfif'],
    dos2Index = 0;
    imgDuration = 5000;

function dos2SlideShow() {
    document.getElementById('dos2-images').src = dos2Array[dos2Index];
    dos2Index++;
    if (dos2Index == dos2Array.length) { dos2Index = 0; }
    setTimeout("dos2SlideShow()", imgDuration);
}
dos2SlideShow();


//Monster Hunter World Slideshow//


var mhwArray = [
    './images/boxArt/monsterHunterWorld.jpg'],
    mhwIndex = 0;
    imgDuration = 5000;

function mhwSlideShow() {
    document.getElementById('mhw-images').src = mhwArray[mhwIndex];
    mhwIndex++;
    if (mhwIndex == mhwArray.length) { mhwIndex = 0; }
    setTimeout("mhwSlideShow()", imgDuration);
}
mhwSlideShow();


//Final Fantasy Slideshow//


var ffArray = [
    './images/boxArt/finalFantasy10.jpg',
    './images/boxArt/finalFantasy12.png',
    './images/boxArt/finalFantasy14.jpg'],
    ffIndex = 0;
    imgDuration = 5000;

function ffSlideShow() {
    document.getElementById('ff-images').src = ffArray[ffIndex];
    ffIndex++;
    if (ffIndex == ffArray.length) { ffIndex = 0; }
    setTimeout("ffSlideShow()", imgDuration);
}
ffSlideShow();


//Fallout New Vegas Slideshow//


var falloutNewVegasArray = [
    './images/boxArt/falloutNewVegas.jpg',
    './images/boxArt/falloutNewVegas2.jpg'],
    falloutNewVegasIndex = 0;
    imgDuration = 5000;

function falloutNewVegasSlideShow() {
    document.getElementById('fallout-images').src = falloutNewVegasArray[falloutNewVegasIndex];
    falloutNewVegasIndex++;
    if (falloutNewVegasIndex == falloutNewVegasArray.length) { falloutNewVegasIndex = 0; }
    setTimeout("falloutNewVegasSlideShow()", imgDuration);
}
falloutNewVegasSlideShow();


//Star Wars: Knights of the Old Republic Slideshow//


var kotorArray = [
    './images/boxArt/kotor.png',
    './images/boxArt/kotor2.jfif'],
    kotorIndex = 0;
    imgDuration = 5000;

function kotorSlideShow() {
    document.getElementById('kotor-images').src = kotorArray[kotorIndex];
    kotorIndex++;
    if (kotorIndex == kotorArray.length) { kotorIndex = 0; }
    setTimeout("kotorSlideShow()", imgDuration);
}
kotorSlideShow();


//Darkest Dungeon Slideshow//


var darkestDungeonArray = [
    './images/boxArt/darkestDungeon.jpg',
    './images/boxArt/darkestDungeon2.jpg'],
    darkestDungeonIndex = 0;
    imgDuration = 5000;

function darkestDungeonSlideShow() {
    document.getElementById('darkest-dungeon-images').src = darkestDungeonArray[darkestDungeonIndex];
    darkestDungeonIndex++;
    if (darkestDungeonIndex == darkestDungeonArray.length) { darkestDungeonIndex = 0; }
    setTimeout("darkestDungeonSlideShow()", imgDuration);
}
darkestDungeonSlideShow();