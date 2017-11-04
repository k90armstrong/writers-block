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