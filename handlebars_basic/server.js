// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Specify the port.
var port = 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Data
// var lunches = [
//   {
//     lunch: "Beet & Goat Cheese Salad with minestrone soup."
//   }, {
//     lunch: "Pizza, two double veggie burgers, fries with a big glup"
//   }
// ];

var icecreams = [
    {name: "vanilla", price: 10, awesomeness: 3},
    {name: "chocolate", price: 4, awesomeness: 8},
    {name: "banana", price: 1, awesomeness: 1},
    {name: "greentea", price: 5, awesomeness: 7},
    {name: "jawbreakers", price: 6, awesomeness: 2}
];

// Routes
app.get("/weekday", function(req, res) {
  res.render("index", lunches[0]);
});

app.get("/weekend", function(req, res) {
  res.render("index", lunches[1]);
});

app.get("/lunches", function(req, res) {
  res.render("all-lunches", {
    foods: lunches,
    eater: "david"
  });
});

app.get("/icecream/:name", function(req, res) {
    let index = -1;
    for(let i = 0; i<icecreams.length; i++)
    {
      if(icecreams[i].name === req.params.name)
      {
        index = i;
        break;
      }
    }
    if(index !== -1)
    {
        res.render("index", icecreams[index]);
    }
    else
    {
        res.render("index", {
            name: "Not Found",
            price: 0,
            awesomeness: 0
        });
    }

    //OR

    // for(let i = 0; i<icecreams.length; i++)
    // {
    //     if(icecreams[i].name === req.params.name)
    //     {
    //         return res.render("index", icecreams[i]);
    //     }
    // }
});

app.get("/icecream", function(req, res) {
    res.render("all-lunches", {
        ice: icecreams,
        eater: "david"
    });
});

// Initiate the listener.
app.listen(port);
