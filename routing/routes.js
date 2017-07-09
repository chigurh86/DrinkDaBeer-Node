var path = require('path');
var connection = require('../server.js');
var express = require('express');
var app = express();
var key = "de98643a5e611444f4e27e1b9b805179"

module.exports = function(app) {
    // home page route
    app.get("/", function(req, res) {
        // res.redirect("/index.html");
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });


    app.get("/api/search", function(req, res) {
      // console.log("Log Body: " + JSON.stringify(req.body.name))
      var BreweryDb = require('node-brewerydb');
      var client = new BreweryDb({apiKey: key});
      client.beers({name: 'Tecate'}, function(err, response) {
        if (err) {
          // handle errors
        }
        // console.log(res);
        // console.log(response);
          res.json(response);
      });
    })
    app.post("/api/profile", function(req, res) {
      const { name, email, photo } = req.body;
      var newPerson = {
            name: name,
            email: email,
            photo: photo,
        }
      });
  }
