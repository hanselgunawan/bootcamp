--Delete Database
DROP DATABASE IF EXISTS favorite_db;

--Create database "favorite_db"
CREATE DATABASE favorite_db;

--Use favorite_db database
USE favorite_db;

CREATE TABLE favorite_foods (
    food VARCHAR(30) NOT NULL,
    score INT
);

CREATE TABLE favorite_songs (
    song VARCHAR(100) NOT NULL,
    artist VARCHAR(50),
    score INT
);

CREATE TABLE favorite_movies (
    film VARCHAR(100) NOT NULL,
    five_times BOOLEAN DEFAULT false,
    score INT
);