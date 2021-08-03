"use strict";
function createSquare(config) {
    var newSquare = { color: "white", area: 10000 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black", width: 50 });
console.log("my square", mySquare);
