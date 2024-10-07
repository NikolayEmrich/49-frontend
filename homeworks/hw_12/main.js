// Homework
// для каждого задания создайте отдельную функцию - используйте возвращенное значение // у вас должная быть как минимум одна стрелочная функция и одна function declaration функция
// Задание 1
// У вас есть массив объектов:
// const starWarsHeroes = [
//     { name: "Anakin Skywalker", age: 30, isJedi: true },
//     { name: "Luke Skywalker", age: 25, isJedi: true },
//     { name: "Han Solo", age: 35, isJedi: false },
//     { name: "Princess Leia", age: 30, isJedi: false },
//     { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
// ];
// Copy
// Используйте методы массивов
// Создайте на основе старого массива новый массив объектов по образу: [{ name: "Luke Skywalker", isJedi: true }, {name: "Han Solo", isJedi: false}...]
// Задание 1.2
// Создайте новый массив с джедаями младше 40 лет
// Задание 1.3
// Посчитайте возраст всех джедаев
// Задание 1.4
// Повысьте возраст героев на 10 лет
// Задание 1.5
// Создайте новый массив, где "Anakin Skywalker" заменен на { name: "Darth Vader", isJedi: false, age: 50 }

const starWarsHeroes = [
    { name: "Anakin Skywalker", age: 30, isJedi: true },
    { name: "Luke Skywalker", age: 25, isJedi: true },
    { name: "Han Solo", age: 35, isJedi: false },
    { name: "Princess Leia", age: 30, isJedi: false },
    { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
];

console.log("Задача 1. Отредактированный массив");
const getOutAge = (starWarsHero) => {
    const result = {};
    result.name = starWarsHero.name;
    result.isJedi = starWarsHero.isJedi;
    return result;
}

const starWarsHeroesModified = starWarsHeroes.map(getOutAge);
console.log(starWarsHeroesModified);


console.log("\nЗадача 2. Джедаи младше 40 лет");
const filterJedi = (jedi) => {
    if (jedi.age < 40 && jedi.isJedi === true) {
        return true
    } else
        return false
}

const filteredStarWarsHero = starWarsHeroes.filter(filterJedi);
console.log(filteredStarWarsHero);


console.log("\nЗадача 3. Возраст всех джедаев");
const sumOfJediAges = starWarsHeroes.reduce (
    (acc, current) => acc + current.age, 0,);
console.log(sumOfJediAges + " лет")


console.log("\nЗадача 4. Возраст героев +10 лет");
const starWarsHeroesPlus10Years = starWarsHeroes.map((hero) => {
    hero.age = hero.age + 10;
    return hero;
});
console.log(starWarsHeroesPlus10Years);

// Второй вариант решения задачи №4.
// const starWarsHeroesPlus10Years2 = starWarsHeroes.map((hero) => ({...hero, age: hero.age + 10}));
// console.log(starWarsHeroesPlus10Years2);

// Тестирование оператора спред!!!

// спред-оператор
const exampleArrray = [1, 2, 3];
console.log(...exampleArrray);
console.log(Math.max(...exampleArrray));

// Копирование массива
const copyOfExampleArray = [...exampleArrray]
console.log(copyOfExampleArray);

// Проверка массива на то, что он и правда копия.
exampleArrray.push(4)
console.log(exampleArrray)

// Склеивание массивов
console.log( [ ...exampleArrray, ...[5, 10, 15] ]);

console.log("\nЗадача 5. Замена Энакина на Вейдера");

function changeHero(hero) {
    // if (hero.name === 'Anakin Skywalker') {
    //     return {name: "Darth Vader", isJedi: false, age:50 }
    // } else {
    //     return hero;
    // }
    // const res = (hero.name === 'Anakin Skywalker') ? {name: "Darth Vader", isJedi: false, age: 50 } : hero;
    // return res;

    return (hero.name === 'Anakin Skywalker') ? {name: "Darth Vader", isJedi: false, age: 50 } : hero;

};

const starWarsHeroesWithDarthVader = starWarsHeroes.map(changeHero);
console.log(starWarsHeroesWithDarthVader)