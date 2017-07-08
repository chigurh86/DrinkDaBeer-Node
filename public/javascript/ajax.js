$(document).ready(function() {
  var key = "41a39c55ae4b474f10857cef0edbf812"
    $("#beer_search").click(function(){
        $.post("http://www.thebeerspot.com/api/search",
        { "function" : "beer" ,
        "dev_key" : "41a39c55ae4b474f10857cef0edbf812" ,
        "search_term" : "darkness",
        "limit" : "5" },
            function(response) {
                $.each(response, function() {
                    $.each(this, function(name, value) {
                        // add each item to a div on the page
                        $("#display").append(name + " : " + value + "<br />");
                    });
                    // throw a line break at the end of each item
                    $("#display").append("<br />");
                });

            });
    })
});
