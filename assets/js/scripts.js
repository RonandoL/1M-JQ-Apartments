$(document).ready(function() {
// AJAX: Receive data
  // 1. add Ajax, w/dataType & success as settings.  $.ajax(url[, settings])
    $.ajax({
      url: "https://api.myjson.com/bins/2sadq?pretty=1",
      dataType: "json", // setting: dataType key: dataType, value: JSON (the returned data)
      success: function(response) { // setting: success key: success, value: a function called if the response is successful, the function is being passed a response that is returned from the server, which is data

// GRAB & DISPLAY DATA
  // 2. create new html element & append to DOM, to use the apartment properties using .each(array, callback)
    // 2.a get the array out of the object,
        $.each(response.apartments, function(i, apartment) {  // this is the array, gives us the 10 apartment objects
    // 4b. apply filtering class to apartment city: hadle caps and spaces, formatted like the filter
            var apartmentClass = apartment.city.toLowerCase().replace(" ", "-");
    // 2b. when appending, think 'variable'
            var listing = "<a href='#' class='list-group-item " + apartmentClass + " listings'><h4 class='list-group-item-heading'>" + apartment.description + " // <span class='green'>Bdrms: </span>" + "<span class='green'>" + apartment.bedrooms + "</span>" + " // <span class='blue'>Price: </span>" + "<span class='blue'>" + apartment.price + "</span>" + "</h4><p class='list-group-item-text'>" + "<span class='rust'>" + apartment.city + "</span>" + ", " + apartment.neighborhood + "</p></a>";
    // 2c. display data: append variable to DOM
            $(".apartments").append(listing);
        });
      },
  // 3. Error handling: when server doesn't give correct response or is down
      error: function(error) {
          console.log(error);
      }
    });

// FILTER CITIES
  // 4. make buttons filter out cities, when clicked
    $(".filter").click(function() {
  // 6. active class: blue header
        $(".filter").removeClass("active");  // removes the class from element with class of .filter
        // now add the class to the specific filter desired
        $(this).addClass("active");
  // 4c. show all listings before hiding the ones we don't want.
        $(".listings").show();
        // use <a> ID (city) to compare against list items that have class that equals ID
        var city = $(this).attr("id");  // the <a> ID is = to name of the city

  // 5. fix the all cities button: use IF/Else
        if (city !== "all") {  // if city != 'all' then run the code
  // 4a. filter out the .not cities using a <li> class selector that don't have the city in question
  // for all the listings, if you do not have the class of the city in question, set your display: to none
            $(".listings").not("." + city).css("display", "none")
        }

    });
});





// Objects: have curly braces and key:value sets
// AJAX: Ansynchronus updates to the browser, so don't need refresh
          // Ajax structure:
          // $.ajax({
          //   url: "",
          //   dataType: ---,
          //   success: ---,
          // })
// JSON:
// setting: dataType - key: dataType, value: JSON (the returned data)
// setting: success - key: success, value: a function we want called if the response is successful, we execute a function on that successfully returned response
// setting: error - if request for data is unsuccessful, how we handle that situation
// JS doesn't understand HTML, wrap HTML in quotes
