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

$("#add-word").on("click", function(event) {

        event.preventDefault();

        var word = $("#word-input").val().trim();
        word.push(word);

        renderButtons();
      });

      renderButtons();




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


    // listeners______________________________________________________________________________


    // listeners end here ____________________________________________________________________


    // start main process___________________________________________________________________________

});