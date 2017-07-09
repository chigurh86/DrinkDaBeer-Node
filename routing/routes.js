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
// [req.body.burger]
    app.get("/api/search", function(req, res) {
      var BreweryDb = require('node-brewerydb');
      var client = new BreweryDb({apiKey: key});

      client.beers({name: 'Bud Light'}, function(err, res) {
        if (err) {
          // handle errors
        }
        // console.log(res);
        // console.log(res.data[0].labels.large);
          res.json(res);
      });
    })

  }
