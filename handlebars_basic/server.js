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

var animals = [
    {type: "dog", pet: true, fierceness: 3},
    {type: "cat", pet: true, fierceness: 8},
    {type: "gorilla", pet: false, fierceness: 1},
    {type: "king kong", pet: false, fierceness: 7},
    {type: "rabbit", pet: true, fierceness: 2}
];

// Routes
app.get("/pets", function(req, res) {
    let pets = [];
    for(let i =0;i<animals.length;i++)
    {
        if(animals[i].pet===true) pets.push(animals[i]);
    }
    res.render("all-lunches", {
        petArr: pets,
        title: "All Pets"
    });
});

app.get("/non-pets", function(req, res) {
    let pets = [];
    for(let i =0;i<animals.length;i++)
    {
        if(animals[i].pet===false) pets.push(animals[i]);
    }
    res.render("all-lunches", {
        petArr: pets,
        title: "Non Pets"
    });
});

app.get("/animals/:name", function(req, res) {
    // let index = -1;
    // for(let i = 0; i<icecreams.length; i++)
    // {
    //   if(icecreams[i].name === req.params.name)
    //   {
    //     index = i;
    //     break;
    //   }
    // }
    // if(index !== -1)
    // {
    //     res.render("index", icecreams[index]);
    // }
    // else
    // {
    //     res.render("index", {
    //         name: "Not Found",
    //         price: 0,
    //         awesomeness: 0
    //     });
    // }

    //OR

    for(let i = 0; i<animals.length; i++)
    {
        if(animals[i].type === req.params.name)
        {
            return res.render("index", animals[i]);
        }
    }
});

// app.get("/icecream", function(req, res) {
//     res.render("all-lunches", {
//         ice: icecreams,
//         eater: "david"
//     });
// });

// Initiate the listener.
app.listen(port);
