// Task 1.
// Создайте массив с элементами: "Мария", "Алексей", "Елена", "Дмитрий". Создайте массив с возрастами: 22, 31, 45, 53. Создайте новый массив, заполнив его элементами в формате "имя возраст лет/годов".
let names = ["Мария", "Алексей", "Елена", "Дмитрий"]
let ages = [22, 31, 45, 53]
let newArray = []
for (let i = 0; i < names.length; i++) {
    let correctValue = names[i] + " " + ages[i] + "лет/годов";
    newArray.push(correctValue)
}
console.log("Task 1:")
console.log(newArray)

// Task 2.
// Используя пройденные на занятии методы массива получите из этого массива новый массив, в котором элементы идут в обратной последовательности.
let newArray2 = [];
for (let i = newArray.length; i > 0; i--) {
    newArray2.push(newArray[i - 1]);
}
console.log("\nTask 2:")
console.log(newArray2)

// Task 3.
// Создайте пустой массив countries. Добавьте в массив следующие страны: "Франция", "Германия", "Италия" Удалите последний элемент из массива и сохраните значение в переменной. Добавьте его в начало массива. Выведите countries в консоль
let countries = [];
countries.push("Франция", "Германия", "Италия")

console.log("\nTask 3:")

console.log("Исходный массив:")
console.log(countries)

let country = countries.pop(2);
console.log("Удаленный последний элемент массива: " + country)

countries.unshift(country)
console.log("Итоговый массив:")
console.log(countries)

// Task 4. Не решено до конца!
// Создайте объект car с ключами brand, model, year, и isElectric. Задайте им значения. // Выведите на экран все ключи объекта // Выведите на экран все значения объекта // Добавьте в объект car метод getCarInfo, который будет возвращать строку, содержащую информацию о марке, модели и году выпуска машины. // Вызовите этот метод и выведите результат на экран. // выполните итерацию по ключам с помощью цикла for...in. // Внутри цикла выводите на экран каждую пару ключ: значение. // Затем модифицируйте вывод, чтобы он выглядел как: "Ключ: [ключ], Значение: [значение]". Например, "Ключ: brand, Значение: Toyota".
const car = {
    brand: "BMW",
    model: "X10",
    year: "2010",
    isElectric: true,
    getCarInfo: () => (`${car.brand}, ${car.model}, ${car.year}`)
};

console.log("\nTask 4:")
console.log(car);
console.log("Работа метода getCarInfo: " + car.getCarInfo());

console.log("\nВыполнение итерации с помощью цикла for...in:")
for (let key in car) {
    console.log(`key: ${key}, value: ${car[key]}`);
}

// Но for-in не работает с методами внутри объекта
// Метод Object.keys() принимат на вход объект и возвращает массив из ключей входящего объекта.
console.log(Object.keys(car));
// Метод Object.values делает тоже самое, но со значениями
console.log(Object.values(car));