const JohnyDepp = {
    name: 'Johny',
    surname: 'Depp',
    age: 50,
    hobbies: ['cricket', 'bowling', 'fishing'],
    films: {
        year1999: ['Pirates1', "Edward"],
        year2003: ['Pirates2', "Perates3"],
    },
    singing() {
        console.log('I am singing');
    }
}

JohnyDepp.singing();

const RikkiMartinConcert24051988 = {
    city: 'Berlin',
    date: '1998-05-25 14:00',
    bilets: 8000,
    songs: ['La la', 'Da vida Loca']
}

console.log(JohnyDepp.name)
console.log(JohnyDepp['name'])

// Добавление веса
JohnyDepp.weight = 70;

console.log(JohnyDepp);

// Удаление возраста 
delete JohnyDepp.age;

console.log(JohnyDepp);

// Проверка наличия свойства
console.log("Есть ли вес у Джони Деппа?:")
const ifJohnyHas = 'weight' in JohnyDepp;
console.log(ifJohnyHas)

console.log("\nЕсть ли вес у Джони Деппа (исп. hasOwn)?:")
console.log(Object.hasOwn(JohnyDepp, 'weight'));

// Получение списка ключей!
const keysOfJohny = Object.keys(JohnyDepp)
console.log(keysOfJohny);

// Получение списка значений!
const valuesOfJohny = Object.values(JohnyDepp)
console.log(valuesOfJohny);

// Все фильмы Джонни Деппа в одном массиве!
const filmValuesForJohny = Object.values(JohnyDepp.films);
console.log(filmValuesForJohny)

// Метод fkat() разбирет массивы в массиве и делает его "плоским"
const filmsOfJohny = filmValuesForJohny.flat();
console.log(filmsOfJohny);

// 2-ой вариант решения через forEach
console.log("\nВариант решения через forEach:");
const allFilms = [];
filmValuesForJohny.forEach((filmsOfYear) => {
    allFilms.push(...filmsOfYear);
});
console.log(allFilms);

// Получение списка ключ-зачение
console.log(Object.entries(JohnyDepp));
