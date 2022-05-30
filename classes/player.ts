export class Team {
    color: string;
    guessesRemain: number;

    constructor(color: string) {
        this.color = color;
        this.guessesRemain = 0;
    }
}