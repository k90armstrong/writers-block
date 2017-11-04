
function searchTemp() {

  //Empty the html giphy-area after each search

  $("#giphy-area").html("");

  searchValue = $("#search").val().trim();

  //Set queryURL for AJAX Request

  var queryURL= "https://api.giphy.com/v1/gifs/search?q="+ searchValue +"&api_key=XTD2QIleof4xLyh8zHWCGfA1OExJXaGZ&limit=10";

  


 // https://images-api.nasa.gov  /search?q={q}
  //AJAX Request

  $.ajax({

    url: queryURL,

    method: 'GET',

}).done((response) => {

    console.log(response);

    for(i = 0; i < response.data.length; i++){

      //Add raiting and img to html

      $("#giphy-area").append("<div class= 'gif-div'>Rating: " + response.data[i].rating.toUpperCase() +
       "<br>" + "<img data-name= " + response.data[i].images.original.url + " src= " + response.data[i].images.original_still.url
       + " class= 'gif-img'></div>");

  };

});
};

function search() {

  //Empty the html giphy-area after each search

  $("#giphy-area").html("");

  searchValue = $("#search").val().trim();
  console.log(searchValue);

  pressTopicBtnGiphy(searchValue);
  pressTopicBtnBing(searchValue);

  //Clear #search

  $("#search").val("")

  //Run init()

  // init();

};

function pressTopicBtnGiphy (searchValue) {

 var queryURL= "https://api.giphy.com/v1/gifs/search?q="+ searchValue +"&api_key=XTD2QIleof4xLyh8zHWCGfA1OExJXaGZ&limit=10";

 $.ajax({

    url: queryURL,

    method: 'GET'

}).done((response) => {

    console.log(response);

    for(i = 0; i < response.data.length; i++){

      //Add rating and img to html

      $("#giphy-area").append("<div class= 'gif-div'>Rating: " + response.data[i].rating.toUpperCase() 
        + "<br>" + "<img data-name= " + response.data[i].images.original.url + " src= " + response.data[i].images.original.url
        + " class= 'gif-img'></div>");

  };

});

};

function pressTopicBtnBing (searchValue) {

   var queryURL= "https://api.cognitive.microsoft.com/bing/v7.0/images/search?q="+ searchValue +"&count=10";


   $.ajax({

    url: queryURL,

    beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","d18f5965cced4c3e82a8548bd6dab528"); //replace value with your own key
            },


            method: 'GET'

        }).done((response) => {

            console.log(response);

            for(i = 0; i < response.value.length; i++){

      //Add rating and img to html

      $("#giphy-area").append("<div class= 'gif-div'><img data-name= " + response.value[i].name + " src= " + response.value[i].contentUrl
        + " class= 'bing-img'></div>");

  };

});

    };



//In creating each image, I added a data-name containing the gif url. Here I swap that with the still image url being used in the src.

function changeImage() {

    var temp = $(this).attr("data-name");

    $(this).attr("data-name", $(this).attr("src"));

    $(this).attr("src", temp);

};







//=======================

//MAIN PROCESS

//=======================

//Initialize on start

// init();



//When the Submit button is clicked the search function is called

//$("#search-btn").on("click", search);
$("#search-btn").on("click", search);

//When the Country buttons are clicked, the presstopicBtn function is called

$(document).on("click", ".topic-btn", pressTopicBtn);

//When the gif images are clicked, changeImage function is called

$(document).on("click", ".gif-img", changeImage);


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

