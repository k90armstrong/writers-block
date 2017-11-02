$(document).ready(function () {
    console.log('hello world');

    // global variables
    var map;
    var homeLocation = {
        lat: 100.3839,
        lng: 30.0099
    };

    // functions___________________________________________________________________________
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
                var latLng = homeLocation
                game.locationIndex += 1;
                game.username = loc.user;
                game.password = loc.password;
                changeLocation(latLng);
            });
        }
    }



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