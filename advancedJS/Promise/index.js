/**
 * Created by hansel.tritama on 10/30/17.
 */
const request = require("request");
let movieName = "";

let changeMovieName = function () {
    return new Promise(function (resolve, reject) {
        movieName = movieName.toUpperCase();
        resolve();
    });
};

let callOmdb = new Promise(function (resolve, reject) {
    request('http://www.omdbapi.com/?apikey=40e9cece&t=inception&tomatoes=true&r=json', function (error, response, body) {
        jsonBody = JSON.parse(body);
        movieName = jsonBody.Title;
        resolve();
    });
});

callOmdb.then(function () {
    console.log("Movie Name --> " + movieName);
    return changeMovieName();
}).then(function () {
    console.log("After Uppercased --> " + movieName);
});