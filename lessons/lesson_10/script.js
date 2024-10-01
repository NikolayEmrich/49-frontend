// Объявление переменных
// Переменным в JS можно переписывать зачения и тип данных
let hello = "hello.js"

let student;
// Переменные без значений будут равны undefined
console.log(student);

student = 'Vladimir';
student = 'Mykola';

console.log(hello);
console.log(typeof hello);

// Ключевое слово const. Здесь нужно определить значение в момент создания. Переписать это значение нельзя.

const language = 'JavaScript'

// не использовать var для работы с переменными


//    --- ПРИМИТИВНЫЕ ТИПЫ ДАННЫХ ---

// *1. string - строка. При создании можно использоать как двойные, так и одинарные ковычки (+ косые ковычки также возможны): "Earth". 'Earth', ....

let planet = 'Earth'
let planetNumber = 3

let greeting = "Мы с планеты" + planet

console.log(greeting);

// Для шаблонных строк исользовать косые ковычки
let greeting1 = `Мы с планеты ${planet}. Она находится в солнечной системе. Это ${planetNumber} от Солнца.`

console.log(greeting1)

// *2. number - число
let n1 = 42
let n2 = 3.14
let n3 = -41

console.log('Это числа: ', n1, n2, n3)

// Самое большое простое число!
let lastSafeInteger = Number.MAX_SAFE_INTEGER

// *3. boolean - булевые значения
let isStudent = true
let isBackend = false

// *4. undefined - неопределенное значение

let value
console.log(value)

// *5. null - пустое число. Указывает на отсутствие значения
let user = null

// *6. - bigint - большое число
// тип даных для операций над большими целочисленными значениями
let bigNumber = 1000n;
let bigResult = 1000n + 100n;

// *7. symbol - уникальное символьное значение

let symbolId = Symbol(10);
console.log(symbolId);


//   ---- ОПЕРАЦИИ НАД ДАННЫМИ В JS ----

// Неявное преобразование в строку
let sum = 14 + 2 + "2";
console.log(sum);

// Явное преобразование 
let sum1 = String(42) + " - ответ на главный вопрос"
console.log(sum1)

// Преобразование в число
let sum2 = 2 + Number('2')
console.log(sum2)

// Яное преобразование через ParseInt
let sum4 = 1000 + parseInt("100$");
console.log(sum4);

// * Логическое преобразование в булевое значение

// Значения для false in JS:
//  false
//  0 and -0
//  null
//  undefined
//  ... (пустая строка)
// NaN (not a number)
// 0n (bigint)

let b1 = Boolean(""); // will be false
let b2 = Boolean(100) // will be true

//  --- МАТЕМАТИЧЕСКИЕ ОПЕРАТОРЫ ---

// Арифметические\
let v1 = 12 + 45;
let v2 = 10 - 5;
let v3 = 2 * 2;
let v4 = 10 ** 10;
let v5 = 8 / 4;
let v6 = 13 % 2; // остаток от деления
let v7 = Math.sqrt(16); // квадратный корень

// СЛУЧАЙНЫЕ ЧИСЛА
let random = Math.random();

// Преобразование случайного ранома к нужному диапазону
// Math.floor() - округляет числа с плавающей точкой

// Случайное число от 1 до 100
let random1 = Math.floor(Math.random() * 100) + 1;

console.log(v7);
console.log(random1);

// Операторы сравнения
// >, <, >=, <=, ===, ==, !=, !==

// Рекомендовано использовать "===". Этот оператор учитывает типы данных.
console.log(25 === "25");

const r1 = 25 !== "25" // Will be true
const r2 = !true // превращает булевое значение в противоположное
console.log(r2);




