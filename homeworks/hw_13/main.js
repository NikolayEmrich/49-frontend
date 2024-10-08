// ЗАДАЧА 1. Напишите фукнцию, которая будет принимать массив. Массив может содержать любые строки и числа. Функция должна вернуть объект, который содержит свойства, ключ и значение которых равны соответствующему элементу массива.
// ['a', 36.6, 'John Doe'] ==> { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' }
console.log("1. Решение задания №1:")

function arrayToObject (array) {
    const result = {};
    array.forEach(x => {result[x] = x;
    });
    return result;
}

const array1 = ['a', 36.6, 'John Doe'];
const result1 = arrayToObject(array1);
console.log(result1);

// ЗАДАЧА 2. Напишите функцию, которая превратит массив который содержит элементы в виде массивов из двух элементов, в объект. Первый элемент каждого внутреннего массива ключ, второй - значение. 
console.log("\n2. Решение задания №2 (v.1):")

function arrayToObject2 (array) {
    const result = {};
    array.forEach(x => {
        const[key, value] = x;
        result[key] = value;
    });
    return result;
}

const array2 = [
    [ 'height', 170 ],
    [ 'weight', 80 ],
    [ 'sport', 'regbi' ],
    [ 'full name', 'John Doe' ],
    [ 'sing', 'love' ],
    [ 'speed', 90 ]
  ];

// Переписываем массив (?)
const result2 = arrayToObject2(array2);
console.log(array2);

// Превращение в объект!
const obj = Object.fromEntries(array2);
console.log(obj);

console.log("\n2. Решение задания №2 (v.2):")
// Решение в виде функции
function createObject (array) {
    return Object.fromEntries(array);
}

const obj2 = createObject(array2);
console.log(obj2);

// ЗАДАЧА 3. Функция должна принимать объект и возвращать строку, где будут перечислены все значения свойств объекта через запятую.
console.log("\n3. Решение задания №3 (v.1):")

function createString (obj) {
    return Object.values(obj).join(', ');
}

const string1 = createString(obj);
console.log(string1);

console.log("\n3. Решение задания №3 (v.2):")
// Решение с помощью другой функции!
function objectValuesToString(obj) {
    return Object.values(obj) + "";
}

const string2 = objectValuesToString(obj);
console.log(string2);

// ЗАДАЧА 4. Напишите функцию, которая принимает объект и возвращает другой обьект, который содержит все свойства исходного обьетка, но значения свойств - это их типы.
console.log("\n4. Решение задания №4 (v.1):")

function arrayToObjectToType (obj) {
    const result = {};
   
    for (let key in obj) {
        result[key] = typeof obj[key];
    }

    return result;
}

const resultType = arrayToObjectToType(obj);
console.log(resultType);

console.log("\n4. Решение задания №4 (v.2):")
// Другое решение:
function arrayToObjectToType2 (obj) {
    const result = {};
    Object.keys(obj).forEach(x => result[x] = typeof obj[x])
    return result;
}

const resultType2 = arrayToObjectToType2(obj);
console.log(resultType2);

