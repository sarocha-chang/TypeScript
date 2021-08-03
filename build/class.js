"use strict";
var Car = /** @class */ (function () {
    function Car(model, doors, isAWD) {
        this.model = model;
        this.doors = doors;
        this.isAWD = isAWD;
    }
    Car.prototype.displayDetail = function () {
        console.log("This car is " + this.model + " with " + this.doors + " and " + this.isAWD);
    };
    return Car;
}());
var car1 = new Car("Ferrari", 4, true);
car1.displayDetail();
