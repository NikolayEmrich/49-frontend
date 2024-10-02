// Task 1.
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
let newArray2 = [];
for (let i = newArray.length; i > 0; i--) {
    newArray2.push(newArray[i - 1]);
}
console.log("\nTask 2:")
console.log(newArray2)

// Task 3.
let countries = [];
countries.push("Франция")
countries.push("Германия")
countries.push("Италия")

console.log("\nTask 3:")

console.log("Исходный массив:")
console.log(countries)

let country = countries.pop(2);
console.log("Удаленный последний элемент массива: " + country)

countries.unshift(country)
console.log("Итоговый массив:")
console.log(countries)

// Task 4. Не решено до конца!
const car = {
    brand: "BMW",
    model: "X10",
    year: 8,
    isElectric: true,
};

console.log("\nTask 4:")
console.log(car);