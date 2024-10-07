//  --- ФУНКЦИЯ FUNCTION ---

// * function declaration - объявление через ключевое слово function
function helloWord(value) {
    return `Hello, ${value}!`;
}

const greeting = helloWord("JavaScript");
const greeting2 = helloWord("sun");
const greeting3 = helloWord(42);

console.log(greeting);
console.log(greeting2);
console.log(greeting3);

//  Функия с условием!
console.log("\nФункия с условием!")
function helloWordOfType(value) {
    if (typeof value === "string" || value === "number") {
        return `Hello, ${value}!`;
    }
    return "Give me string value, please";
}

const greeting5 = helloWordOfType(42);
console.log(greeting5);

// ФУНКЦИЯ С ОШИБКОЙ !
// function helloWordWithThrow(value) {
//     if (typeof value === "string") {
//         return `Hello, ${value}!`;
//     }
       // Выбрасываем оишбку чтобы не дать использовать фунциию с данныминеверного типа !!!
//     throw new Error("Give me string value, please");
// }

// const greeting6 = helloWordWithThrow(42);
// console.log(greeting6);

//  ----- FUNCTION EXPRESSION ----
// Объявление в переменной + ключевое слово function
console.log("\nFUNCTION EXPRESSION:")
const sum = function (num1, num2) {
    return num1 + num2;
};

const sumResult = sum(50, 30);
console.log("Сумма двух чисел ====> " + sumResult)

//  ----- ARROW FUNCTION ----
// Стрелочные так из-за симола =>
console.log("\nARROW FUNCTION:")

const multiply = (a, b, c) => a * b * c;

const multiply1 = (a, b, c) => {
    const result = a * b * c;
    return `${result} - result это результат умножения ${a}, ${b}, ${c}` ;
}

const multiply3 = (a, b, c) => {
    a * b * c;
};

console.log(multiply(10, 2, 3));
console.log(multiply1(10, 2, 3));
console.log("\nБез возвращения функция со {} вернет undefined:")
console.log(multiply3(10, 2, 3));

//  ------ МЕТОДЫ МАССИВОВ -------

const brothers = [
    {name: "Legolas", height: 190, race: "elf", age: 500, hasMagic: true},
    {name: "Aragorn", height: 87, race: "human", age: 87, hasMagic: false},
    {name: "Gimli", height: 130, race: "dworf", age: 100, hasMagic: false},
    {name: "Gendalf", height: 195, race: "human", age: 2000, hasMagic: true}
];

let frodo = {name: "Frodo", height: 105, race: "hobbit", age: 33, hasMagic: true};

console.log("Новая длина массива: ", brothers.push(frodo))
console.log(brothers);

// * map
// map не изменяет исходный массив. Создает новый массив из изходного

// 1. Создать массив строк с именами героев
const brothersNames = brothers.map(el => el.name);
console.log(brothersNames);

// 2. Создать массив строк с Возрастами героев
const brothersAges = brothers.map(el => el.age);
console.log(brothersAges);

// 3. Создать массив строк с именами и возрастами героев
const brothersNamesAndAges = brothers.map(el => el.name + " " + el.age);
console.log(brothersNamesAndAges);

// 4. Создать массив строк с именами и возрастами героев (используя return)
const brothersNamesAndAges2 = brothers.map(el => {
    return el.name + " " + el.age
});
console.log(brothersNamesAndAges2);

//      ---------- * FILTER ------------
// Возвращает весь массив элементов

console.log("\nМассив с использованным фильтром:")
console.log(brothers.filter(x => x.age > 499 && x.hasMagic ===true));

//      ---------- * FIND ------------
// Возвращает 1-ый элемент удовлетворяющий списку.
console.log("\nПервый найденный элемент:")
const hobbit = brothers.find(x => x.race === "hobbit");
console.log(hobbit)
const oldHero = brothers.find(x => x.age > 100);
console.log(oldHero)

//      ---------- * REDUCE ------------
// Считает сумму возраста всех братьев

let sum1 = 0;
for (let i = 0; i < brothersAges.length; i++) {
    sum1 += brothersAges[i];
}
console.log("\nСумма возрастов из цикла: " + sum1);

let sum2 = brothersAges.reduce((acc, current) => acc + current, 1000);
console.log("Сумма возрастов из reduce (начинающийся с 1000): " + sum2);

let sum3 = brothers.reduce((acc, current) => acc + current.age, 0);
console.log("Сумма возрастов из reduce: " + sum3);

let brothersNamesInString = brothers.reduce((acc, current) => acc + current.name + ", ", "Братство кольца: ");
console.log("\nВсе герои (СТРОКОЙ) из reduce:\n" + brothersNamesInString);

//      ---------- * SLICE ------------
// Удаляем 2 последних символа в строке
console.log("\nСтрока с удаленными символами в конце:");
console.log(brothersNamesInString.slice(0, -2));

console.log("\nРазделяет все элементы в массиве:");
console.log(brothersNamesInString.split(""));

console.log("\nРазворачивает се элементы массива:");
const newBrothers = brothersNamesInString.split("").reverse();
console.log(newBrothers);

console.log("\nСоединяет все элементы массива:");
const newBrothers2 = newBrothers.join("");
console.log(newBrothers2);


