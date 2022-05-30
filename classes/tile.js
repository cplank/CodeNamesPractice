"use strict";
exports.__esModule = true;
exports.Tile = void 0;
var Tile = /** @class */ (function () {
    function Tile(color, word, location) {
        this.color = color;
        this.word = word;
        this.direction = "down";
        this.location = location;
    }
    return Tile;
}());
exports.Tile = Tile;
