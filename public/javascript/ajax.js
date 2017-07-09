
function displayBeers(){

    $.get("/api/search", function(data) {
      console.log(data)
    });
  }


function display(){
    for (var i = 0; i < 12; i++) {
      var beerDiv = $("<div class ='productHolder thumbnail hero-feature beerDiv'>");
      var beerCaption = $("<div>");
      var beerImage = $("<img>");
      // beerImage.attr("alt", res.data[i].name);
      // beerImage.attr("src", res.data[i].labels.large);
      beerImage.addClass('beerImage');
      // var name = res.data[i].name;
      // var description = res.data[i].description;
      // var abv = res.data[i].abv;
      // display to DOM
      // building caption
      beerCaption.append("<h3>" + "name" + "</h3>");
      beerCaption.append("<div class ='desc'>" + "<p>" + "desc" + "</p>" + "</div");
      // building thumbnail
      beerDiv.append(beerImage);
      beerDiv.append(beerCaption);
      $('#display').append(beerDiv);
    }
  }

  $( "#beer_search" ).click(function() {
    event.preventDefault();
    $('#display').empty();
    displayBeers();
    });
