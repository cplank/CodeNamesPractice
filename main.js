"use strict";
exports.__esModule = true;
var tile_1 = require("./classes/tile");
var player_1 = require("./classes/player");
var words = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five"];
function assignRandomNumber(max) {
    console.log("inside assignRandomNumber", max);
    console.log("result", Math.floor(Math.random() * max));
    return Math.floor(Math.random() * max);
}
console.log("starting");
start();
console.log("all done");
function start() {
    var RedTeam = new player_1.Team("red");
    var BlueTeam = new player_1.Team("blue");
    console.log("Creating Board");
    var board = createTiles();
}
function createTiles() {
    console.log("inside createTiles");
    var red = true;
    var tiles = [];
    var redCount = 0;
    var numsSoFar = [];
    console.log("headed into for loop");
    for (var i = 17; i >= 0; i--) {
        console.log("i is this:", i);
        if (red && redCount < 9) {
            var randomNumber_1 = assignRandomNumber(25);
            while (numsSoFar.includes(randomNumber_1)) {
                randomNumber_1 = assignRandomNumber(25);
            }
            numsSoFar.push(randomNumber_1);
            tiles.push(new tile_1.Tile("red", words[randomNumber_1], randomNumber_1));
            redCount++;
            red = false;
        }
        else {
            var randomNumber_2 = assignRandomNumber(25);
            while (numsSoFar.includes(randomNumber_2)) {
                randomNumber_2 = assignRandomNumber(25);
            }
            tiles.push(new tile_1.Tile("blue", words[randomNumber_2], randomNumber_2));
            red = true;
        }
        for (var i = 7; i >= 0; i--) {
            var randomNumber_3 = assignRandomNumber(25);
            while (numsSoFar.includes(randomNumber_3)) {
                randomNumber_3 = assignRandomNumber(25);
            }
            tiles.push(new tile_1.Tile("bystander", words[randomNumber_3], randomNumber_3));
        }
        var randomNumber = assignRandomNumber(25);
        while (numsSoFar.includes(randomNumber)) {
            randomNumber = assignRandomNumber(25);
        }
        new tile_1.Tile("assasian", words[randomNumber], randomNumber);
    }
    console.log("tiles, yo", tiles);
    return tiles;
}
