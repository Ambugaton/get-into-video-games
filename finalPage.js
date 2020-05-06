//////////////////////////////////////////
//                                      //
//           Form Validation            //
//                                      //
//////////////////////////////////////////


function validateForm() {
    var x = document.forms["genreForm"]["genre1"].value;
    if (x == "") {
        alert("Come on, don't leave me hanging!");
            } else if (x == "Action") {
                alert("Cool, thanks! I'll get some more fast movers in there and see if I can look that one up.");
            } else if (x == "Action-Adventure") {
                alert("Alright, thank you! I'll write up some more action-adventure games and see if I can look that one up.");
            } else if (x == "Role-Playing") {
                alert("Cool, thanks! I'll get some more RPGs in the mix and see if I can look that one up.");
            } else if (x == "Strategy") {
                alert("Perfect, thanks! I definitely need to get more strategy games in there and see if I can look that one up.");
            } else {
                alert("I couldn't quite catch that, try capitalizing one or both of the words in the genre or adding a dash like I have it written on the site!");
            }
    return false;
}