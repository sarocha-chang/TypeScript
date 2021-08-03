class Car{
    
    model: string;
    doors: Number;
    isAWD: Boolean;
    
    constructor(model: string, doors: Number, isAWD: Boolean){
    this.model = model;
    this.doors = doors;
    this.isAWD = isAWD;
    }

    displayDetail (): void{
        console.log(`This car is ${this.model} with ${this.doors} and ${this.isAWD}`)
    }
}
const car1 = new Car("Ferrari", 4, true);
car1.displayDetail();