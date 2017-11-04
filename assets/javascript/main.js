$(document).ready(function () {
    console.log('hello world');

    // global variables

    // functions___________________________________________________________________________



    // functions end here _________________________________________________________________

    // functions to make views


    // functions to make views end here ___________________________________________________

    // API CALLS FUNCTIONS__________________________________________________________________

    // andrew below here

    var title = "space+jam";
    var queryURL = "https://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=40e9cece";



    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        console.log(response);
        console.log(response.poster);

        // Creating a div to hold the movie
        var movieDiv = $("<div class='movie'>");

        // Retrieving the URL for the image
        var imgURL = response.Poster;

        // Creating an element to hold the image
        var image = $("<img>").attr("src", imgURL);

        // Appending the image
        movieDiv.append(image);
    });


    $(document).on('click', 'button', function () {
        // var type = $(this).data('type');
        var type = "believer";
        var queryURL = 'http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + type + '&api_key=dde77cbf0e2687a7d9e2ce7c75179283&format=json';
        $.ajax({ url: queryURL, method: 'GET' })
            .done(function (response) {
                console.log(response);
                // if results are less than 10, change to length of what exists

                var tracks = response.results.trackmatches.track;

                // create 

                var trackTile = $(`<div class='col-md-3 tile'>
                            <table>
                            <thead>
                                <tr>
                                    <td>Track</td>
                                    <td>Artist</td>
                                </tr>
                            </thead>
                            <tbody class='track-rows'>
                            </tbody>
                    </table>
                </div>`);

                $(".tiles").append(trackTile);



                for (var i = 0; i < 10; i++) {
                    var track = tracks[i];
                    console.log(track);

                    var trackRow = $("<tr>");
                    var artistCell = $("<td>");
                    var trackTitleCell = $("<td>");
                    artistCell.text(track.artist);
                    trackTitleCell.text(track.name);
                    trackRow.append(artistCell);
                    trackRow.append(trackTitleCell);

                    // append to table body
                    $(".track-rows").append(trackRow);
                }
            });
    })




    // prathima below here


    // kyle below here


    // API CALLS END HERE_____________________________________________________________________


    // listeners______________________________________________________________________________


    // listeners end here ____________________________________________________________________


    // start main process___________________________________________________________________________

});