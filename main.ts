import { Tile } from "./classes/tile";
import { Team } from "./classes/player";

const words: string[] = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five"];

function assignRandomNumber(max: number): number {
    console.log("inside assignRandomNumber", max);
    return Math.floor(Math.random() * max);
}

console.log("starting");
start();
console.log("all done");

function start() {
    const RedTeam = new Team("red");
    const BlueTeam = new Team("blue");

    console.log("Creating Board");
    const board = createTiles();

}

function createTiles(): Tile[] {
    console.log("inside createTiles");
    let red = true;
    const tiles: Tile[] = [];
    let redCount = 0;
    let numsSoFar = [];

    for (var i = 16; i >= 0; i--) {
        if (red && redCount < 9) {
            let randomNumber = assignRandomNumber(25);
            while (numsSoFar.includes(randomNumber)) {
                randomNumber = assignRandomNumber(25);
            }
            numsSoFar.push(randomNumber);
            tiles.push(new Tile("red", words[randomNumber], randomNumber));
            redCount++
            red = false;
        } else {
            let randomNumber = assignRandomNumber(25);
            while (numsSoFar.includes(randomNumber)) {
                randomNumber = assignRandomNumber(25);
            }
            tiles.push(new Tile("blue", words[randomNumber], randomNumber));
            red = true;
        }
    }
    for (var i = 6; i >= 0; i--) {
        let randomNumber = assignRandomNumber(25);
        while (numsSoFar.includes(randomNumber)) {
            randomNumber = assignRandomNumber(25);
        }
        numsSoFar.push(randomNumber);
        tiles.push(new Tile("bystander", words[randomNumber], randomNumber));
    }
    let randomNumber = assignRandomNumber(25);
    while (numsSoFar.includes(randomNumber)) {
        randomNumber = assignRandomNumber(25);
    }
    numsSoFar.push(randomNumber);
    tiles.push(new Tile("assasian", words[randomNumber], randomNumber));


    console.log("tiles, yo", tiles);
    console.log("this many", tiles.length);
    return tiles;
}