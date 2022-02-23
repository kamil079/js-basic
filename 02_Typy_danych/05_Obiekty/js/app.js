let car = {
    type: 'sedan',
    color: 'green',
    engine: 2.5
};

let carDescription = `${car.color} ${car.type} ${car.engine}`;
console.log(carDescription);

let color = {
    red: 100,
    green: 0,
    blue: 50
};

console.log(color.red, color.green);

color.red = 50;
color.green = 50;

console.log(color.red, color.green);
