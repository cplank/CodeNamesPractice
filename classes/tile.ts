export class Tile {
    color: string;
    word: string;
    direction: string;
    location: number;

    constructor(color: string, word: string, location: number) {
        this.color = color;
        this.word = word;
        this.direction = "up";
        this.location = location;

    }

    turnDown() {
        this.direction = "down";
    }
}