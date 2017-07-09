function displayBeers(){
    $('#displayArea').empty();
    for (var i = 0; i < 3; i++) {
      var beerDiv = $("<div class ='productHolder thumbnail hero-feature beerDiv'>");
      var beerCaption = $("<div>");
      var beerImage = $("<img>");
      var buttonLink = $("<a>");
      buttonLink.attr("href","#")
      // beerImage.attr("alt", res.data[i].name);
      beerImage.attr("src", "images/coolbeer.jpg");
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
      $('#displayArea').append(beerDiv);
    }
  }

    displayBeers();
