$(document).ready(function () {
    console.log('hello world');

    // global variables
    var meta = JSON.parse('https://epic.gsfc.nasa.gov/api/natural');
  
  var queryURL= "https://api.giphy.com/v1/gifs/search?q="+ giphy.searchValue +"&api_key=XTD2QIleof4xLyh8zHWCGfA1OExJXaGZ&limit=10";

    $.ajax('https://epic.gsfc.nasa.gov/api/natural', { 
        success : function(iDataArr, stat, xhr) { 
            // do something with the list
        }
    });


    // functions___________________________________________________________________________



    // functions end here _________________________________________________________________

    // functions to make views


    // functions to make views end here ___________________________________________________

    // API CALLS FUNCTIONS__________________________________________________________________

    // andrew below here


    // prathima below here


    // kyle below here


    // API CALLS END HERE_____________________________________________________________________


    // listeners______________________________________________________________________________


    // listeners end here ____________________________________________________________________


    // start main process___________________________________________________________________________

});