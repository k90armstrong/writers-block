// global map variables
var map;
var marker;
var homeLocation = {
    lat: 42.9,
    lng: -101.8099
};
// MAP FUCNTION HERE
function myMap() {
    var mapProp = {
        zoom: 5,
        disableDefaultUI: true
    };
    map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var latLng = getUserLocation();

    google.maps.event.addListener(map, 'projection_changed', function () {

        overlay = new google.maps.OverlayView();
        overlay.draw = function () {};
        overlay.setMap(map);
    });
    // map listeners
    map.addListener('click', function (event) {
        addMarker(event.latLng);
    });
}

function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            var latLng = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            changeLocation(latLng);
        }, (error) => {
            // if user doesnt allow for the location info just start with the first index in the location array
            var latLng = homeLocation;
            changeLocation(latLng);
        });
    }
}

function changeLocation(latLng) {
    map.setCenter({
        lat: latLng.lat - .1,
        lng: latLng.lng
    })
    var glatLang = new google.maps.LatLng(latLng.lat, latLng.lng);
}

// Adds a marker to the map and push to the array.
function addMarker(location) {
    if (marker) {
        marker.setMap(null);
    }
    marker = new google.maps.Marker({
        position: location,
        map: map
    });
    // search an api for the spatial behaviors
    var latLng = {
        lat: location.lat(),
        lng: location.lng()
    };
    console.log(latLng);
    runSpatialAPI(latLng);

}

$(document).ready(function () {
    console.log('hello world');

    //   Materialize.updateTextFields();
    // });



    // these are the buttons




    // global variables
    var twitterConsumerKey = "ajhJmNa7Mwe2OTXHtu7irdrlJ";
    var twitterConsumerSecret = "wnMn2ohEHItsqQmcJLbbPGuPp0aGxFYFl1EtHQ3MjMnijKX4Gb";
    var twitterConcat = twitterConsumerKey + ':' + twitterConsumerSecret;
    var twitterBase64Encoded = btoa(twitterConcat);


    // functions___________________________________________________________________________




    // functions end here _________________________________________________________________

    // functions to make views


    // functions to make views end here ___________________________________________________

    // API CALLS FUNCTIONS__________________________________________________________________

    // andrew below here


    // prathima below here
    function runGiphyAPI(searchValue) {

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchValue + "&api_key=XTD2QIleof4xLyh8zHWCGfA1OExJXaGZ&limit=10";

        $.ajax({

            url: queryURL,

            method: 'GET'

        }).done((response) => {

            console.log(response);

            for (i = 0; i < response.data.length; i++) {

                //Add rating and img to html

                $("#giphy-area").append("<div class= 'gif-div'>Rating: " + response.data[i].rating.toUpperCase() +
                    "<br>" + "<img data-name= " + response.data[i].images.original.url + " src= " + response.data[i].images.original.url +
                    " class= 'gif-img'></div>");

            };

        });

    };

    // bing api
    function runBingAPI(searchValue) {

        var queryURL = "https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=" + searchValue + "&count=10";


        $.ajax({

            url: queryURL,

            beforeSend: function (xhrObj) {
                // Request headers
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "d18f5965cced4c3e82a8548bd6dab528"); //replace value with your own key
            },


            method: 'GET'

        }).done((response) => {

            console.log(response);

            for (i = 0; i < response.value.length; i++) {

                //Add rating and img to html

                $("#giphy-area").append("<div class= 'gif-div'><img data-name= " + response.value[i].name + " src= " + response.value[i].contentUrl +
                    " class= 'bing-img'></div>");

            };

        });

    };


    //In creating each image, I added a data-name containing the gif url. 
    //Here I swap that with the still image url being used in the src.
    function changeImage() {

        var temp = $(this).attr("data-name");

        $(this).attr("data-name", $(this).attr("src"));

        $(this).attr("src", temp);

    };
    function runwordAPI(searchValue) {

        var queryURL = "https://api.datamuse.com/words?ml="+searchValue +"&max=10";

        $.ajax({

            url: queryURL,

            method: 'GET'

        }).done((response) => {

            for (i = 0; i < response.length; i++) {

                //Add rating and img to html

                $("#giphy-area").append("<div class= 'gif-div'> Synonym: " + response[i].word + 
                    "</div>");

            };

        });

    };











    // END PRATHIMA

    // kyle below here
    function runSpatialAPI(location) {
        // location = {lat: 909.5495, lng: 9303.543534}
        var url = "";
        var apiKey = "";
        $.ajax({
            url: url,
            type: "GET",
            success: function (result) {
                console.log(result);
            }
        });
    }

    // API CALLS END HERE_____________________________________________________________________

    // view functions
    function resetSearch() {
        //Empty the html giphy-area after each search
        $("#giphy-area").html("");
    }

    // handlers for click and search
    function pressTopicBtnHandler(event) {
        // resest all views
        resetSearch();
        // initialize search for ALL APIS!!!!
        // here is the search term that all apis will use
        var searchTerm = $(this).text();
        runBingAPI(searchTerm);
        runGiphyAPI(searchTerm);
    }

    function searchHandler(event) {
        if (event.key === 'Enter') {
            // resest all views
            resetSearch();
            // initialize search for ALL APIS!!!!
            // here is the search term that all apis will use
            var searchTerm = $('input').val().trim();
            alert(searchTerm);
            runBingAPI(searchTerm);
            runGiphyAPI(searchTerm);
            runwordAPI(searchTerm);

        }
    }
    // End of handlers for click and search

    // listeners______________________________________________________________________________
    $("input").on("keypress", searchHandler);
   // $('#first_name2\\ add-word').on("keypress", searchHandler);
    $(document).on("click", ".topic-btn", pressTopicBtnHandler);
    $(document).on("click", ".gif-img", changeImage);



    // listeners end here ____________________________________________________________________


    // start main process___________________________________________________________________________
});