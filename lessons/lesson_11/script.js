// Arrays - массивы (сложный тип данных)

const arr = [];
const numbers = [4, 8, 15, 16, 23, 42];
const fruits = ['apple', 'orange', 'kiwi', 'banana']
console.log(fruits)

// Можно создавать массивы из разных типов данных
const arr1 = [1, "apple", undefined, true];
console.log(arr1);

let kiwi = fruits[2]
console.log(kiwi)

let secret = fruits[10]
console.log(secret) // undefined

//  --- ЦИКЛ * for loop - цикл for ---

console.log()
console.log("Все элементы массива:")
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i], "под номером", i)
}

let fruitsLength = fruits.length // Длина массива fruits

// * -- ЦИКЛ while - цикл (до тез пор / пока) --

let i = 0;

console.log()
console.log("Запуск цикла while:")
while (i < 5) {
    console.log(i, "раз")
    i++;
}

// --- Условный итератор if / else ---

let isStudent = true

console.log()
console.log("Студент ли Вы?")
if (isStudent) {
    console.log('похоже что вы студент')
} else {
    console.log('кажется что вы не студент')
}

// Методы удаления и добавления элементов массива.
// Все методы массива: мутирующие и не мутирующие
// Мутирующие - измняют исходный массив

const animals = ["shark", "panda", "tiger", "otter"];

const snake = "snake";

// * push - метод добавления элемента в конец массива

animals.push(snake);

console.log()
console.log("Массив с добавленной змей:")
console.log(animals)

const newLengthOfAnimals = animals.push(snake);

console.log()
console.log("Длина массива с повторно добавленной змеей (не очевидная работа метода):")
console.log(newLengthOfAnimals)

// * pop - метод удаления элементов из конца массива (мутирующий метод)
// - изменяет исходный массив

console.log()
console.log("Удаление элемента из конца массива:")

const returnedValue2 = animals.pop()

console.log(animals);
console.log("Удаленный элемент: ", returnedValue2);

// * unshift - метод добавления элемента в начало массива (мутирующий метод)

console.log()
console.log("Добавление элемента из начала массива:")

const returnedValue3 = animals.unshift("panda");

console.log(animals)
console.log("Длина массива: ", returnedValue3)

// * shift - метод удлаения элемента из начла массива (мутирующий метод)

console.log()
console.log("Удаление элемента из начала массива:")

const returnedValue4 = animals.shift("panda");

console.log(animals)
console.log("Удаленный элемент: ", returnedValue4)

// --- КОПИЯ МАССИВА ---

// Создание копии элементов массива через spread (...)
const newAnimals = [...animals];

// Создание двумерного массива
// Если не прописать "..." элементы не распауются
const mixedArr1 = [animals, fruits];
const mixedArr2 = [...animals, ...fruits];

console.log();
console.log("Копия массива:");
console.log(newAnimals);

console.log("Копия массивов в массиве:");
console.log(mixedArr1);

console.log("Копируем 2 массива в один в распаковкой:");
console.log(mixedArr2);

console.log();
console.log("Копия массива с добавлением элементов:");
const mixedArr3 = ["fox", ...animals, "panda"];
console.log(mixedArr3);

//  Сравнение массивов

console.log();
console.log("Проверка равны ли массивы?");
const num1 = [1, 2, 3];
const num2 = [1, 2, 3];
const isTrue = num1 === num2;
console.log(isTrue);

// --- ГЛУБОКАЯ КОПИЯ для двумерных (и более) массивов ---

let mixedArr1copy = structuredClone(mixedArr1);

mixedArr1copy[0][1] = "polar bear";

// Теперь мы видим что это действительно два разных массива.
console.log(mixedArr1);
console.log(mixedArr1copy);

// ------ ОБЪЕКТЫ ------

// Объект - ссылочный тип данных
// Данные хранятся в формате - ключ и значение
// Ключи - это строковые значения

const person1 = {
    name: "Ron",
    lastname: "Weasley",
    age: 40,
    isAdult: true,
    isMarried: false,
    siblings: ["Jinny", "Fred", "George"]
};

const person2 = {
    name: "Jinny",
    lastname: "Weasley",
    age: 35,
    isAdult: true,
    isMarried: true,
    siblings: ["Ron", "Fred", "George"]
};

// Массив, состоящий из объектов!
console.log();
console.log("Объекты в массиве:");
const family = [person1, person2];
console.log(family);

console.log();
console.log("Имя и фамилия 2-го объекта:");
console.log(person2.name, person2.lastname);

// Пример с конкатенацией.
console.log();
console.log("Конкатенация:");
const person2Info = person2.name + " " + person2.lastname + " is sister of " + person1.name;
console.log(person2Info);

// Пример с шаблонной строкой!
console.log();
console.log("Шаблонная строка ${}:");
const person1Info = `${person1.name} ${person1.lastname} is brother of ${person2.name}`
console.log(person1Info);

// Работа с объектами в циклах!
console.log();
console.log("Работа собъектами в циклах:");
for(let i = 0; i < family.length; i++) {
    console.log(`${family[i].name} is ${family[i].age}`)
}


const variable = 'hasWife';

const person3 = {
    name: "Bill",
    lastname: "Weasley",
    age: 65,
    isAdult: true,
    isMarried: true,
    [variable]: true,
    "Brothers andd Sisters": ["Ron", "Fred", "George", "jinny"]
};

// Как забрать значение из объекта, состоящее из нескольких слов (с использованием [])!
console.log();
console.log("Забираем значение, названное не по стандарту:");
console.log(person3["Brothers andd Sisters"]);

// Обратите внимание что переменная variable при выводе в консоле отобразил свое значение! Это используется, если мы хотим чтобы в наш объект пришел ключ из соседней переменной!
console.log();
console.log("Персона 3:");
console.log(person3);

//    ---- ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ ----

// В одно действие можно сделать:
// 1. Забрать данные из объекта по ключам
// 2. Объявляем переменные по ключам
// 3. Присваиваем значения этим переменным

const { name, lastname, age, siblings: siblings1 } = person1;

console.log(name);
console.log(siblings1);
console.log(age);

//    ---- ДЕСТРУКТУРИЗАЦИЯ МАССИВОВ ----

// Добавляем 3-его перонажа в массив
family.push(person3);

const[ron, jinny, bill] = family;

// Отображение всех персонажей с помощью деструктуризации!
console.log();
console.log("Отображение всех с помощью деструктуризации:");
console.log(ron);
console.log(jinny);
console.log(bill);

// Как достать только один элемент!
const[, , bill2] = family;

console.log();
console.log("Отображение одного элемента с помощью деструктуризации:");
console.log(bill2);



