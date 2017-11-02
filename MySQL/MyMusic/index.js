/**
 * Created by hansel.tritama on 11/1/17.
 */
var mysql = require("mysql");
var inquirer = require("inquirer");
var clear = require("clear");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "favorite_music"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    //queryAllSongs();
    //queryDanceSongs();
});

function queryAllSongs() {
    connection.query("SELECT * FROM fav_music WHERE genre=?", ["Jazz"], function(error, result) {
        for (var i = 0; i < result.length; i++) {
            console.log(result[i].musicId + " | " + result[i].title + " | " + result[i].artist + " | " + result[i].genre);
        }
        console.log("-----------------------------------");
        home();
    });
}

function quertInsertSong(title, artist, genre) {
    connection.query("INSERT INTO fav_music(title, artist, genre) VALUES(?, ?, ?)", [title, artist, genre],
        function(err, res) {
            console.log(res.affectedRows + " song inserted!\n");
            // Call updateProduct AFTER the INSERT completes
            setTimeout(function () {
                clear();
                home();
            }, 1000);
    });
}

function askASong()
{
    inquirer
        .prompt([
            {
                message: "Title?",
                name: "song_title",
            },
            {
                message: "Artist?",
                name: "song_artist",
            },
            {
                message: "Genre?",
                name: "song_genre",
            },
        ])
        .then(function(answer) {
            quertInsertSong(answer.song_title, answer.song_artist, answer.song_genre);
        });
}

function askUpdateSong()
{
    let mySongID = [];
    connection.query("SELECT * FROM fav_music", function(error, result) {
        for (var i = 0; i < result.length; i++) {
            mySongID.push(result[i].musicId.toString());
        }
    });

    setTimeout(function () {
        console.log(mySongID);
        inquirer
            .prompt([
                {
                    type: "list",
                    message: "Which ID?",
                    name: "song_id",
                    choices: mySongID
                }
            ])
            .then(function(answer) {
                askByID(answer.song_id);
        });
    }, 1000);
}

function home()
{
    inquirer
        .prompt([
            {
                type: "list",
                message: "What do you want to do?",
                name: "action",
                choices: ["Show Database", "Insert Database", "Update Database"]
            }
        ])
        .then(function(answer) {
            if(answer.action === "Show Database")
            {
                queryAllSongs();
            }
            else if(answer.action === "Insert Database")
            {
                askASong();
            }
            else if(answer.action === "Update Database")
            {
                askUpdateSong();
            }
        });
}

home();