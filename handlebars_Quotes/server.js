var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "quotes_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Express and MySQL code should go here.
app.get("/all-quotes", function(req, res) {
    let quotesArr = [];
    connection.query("SELECT * FROM quotes", function(error, result) {
        for (let i = 0; i < result.length; i++) {
            quotesArr.push({
                id:result[i].id,
                author:result[i].author,
                quote:result[i].quote
            });
        }
        res.render("index", {
            quotes: quotesArr
        });
    });
});

app.get("/:id", function(req, res) {
    connection.query("SELECT * FROM quotes WHERE id=?", [req.params.id], function(error, result) {
        if(error){
            return res.status(500).end();
        }
        res.render("single-quote", result[0]);
    });
});

app.post("/api/quotes", function(req, res) {
    connection.query("INSERT INTO quotes(author, quote) VALUES (?, ?)", [req.body.author, req.body.quote], function(error, result) {
        if(error){
            return res.status(500).end();
        }
    });
});

app.put("/api/quotes_update", function(req, res) {
    connection.query("UPDATE quotes SET author=?, quote=? WHERE id=?", [req.body.author, req.body.quote, req.body.id], function(error, result) {
        if(error){
            return res.status(500).end();
        }
    });
});

app.listen(port, function() {
  console.log("Listening on PORT " + port);
});
