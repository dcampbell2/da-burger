// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        let newBurger = {
            // Value for burger_name column is id="burger-name" textarea
            burger_name: $("#burger-name").val().trim(),
            // Default devoured to false
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
      
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var devoured = $(this).data("devoured");

      console.log(id)
  
      var justDevoured = {
        devoured: 1
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: justDevoured
      }).then(
        function() {
          console.log("changed devoured to", justDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  