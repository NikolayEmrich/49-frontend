const transport = {
    speed: 140,
    color: "red",
    move: function() {
        console.log("I am moving");
    }
};

// обращение к свойству объекта
const prop = "speed";

console.log(transport.prop); // undefined
console.log(transport[prop]); // 140

transport.move();  // "I am moving"

// Создаем потомка от transport
const car = {
    model: 'Tesla Model 3',
    __proto__: transport,
};

console.log(car.model)
console.log(car.speed) // прототип "__proto__" перенимает характеристики объекта
console.log(car.move())

// Создание объекта с поомщью конструктора
console.log("\nСоздание объекта с поомщью конструктора:")
const ship = new Object();
ship.year = 1996;

console.log(ship.year)

Object.setPrototypeOf(ship, transport);

ship.move();

