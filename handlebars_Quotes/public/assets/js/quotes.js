// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  // jQuery event handlers should go here.
    $(".delquote").on("click", function (event) {
        var id = $(this).data("id");

        $.ajax("/api/quotes" + id, {
           type:"DELETE"
        }).then(
            function () {
                console.log("deleted id ", id);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newQuote = {
            author: $("#auth").val().trim(),
            quote: $("#quo").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/quotes", {
            type: "POST",
            data: newQuote
        }).then(
            function() {
                console.log("created new quote");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".update-form").on("submit", function (event) {
        event.preventDefault();
        var myID = $(this).data("id");
        var updatedQuote = {
            id:myID,
            author: $("#auth").val().trim(),
            quote: $("#quo").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/quotes_update", {
            type: "PUT",
            data: updatedQuote
        }).then(
            function() {
                console.log("quote updated!");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
