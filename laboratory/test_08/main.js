
// При такой реализации сначала на странице не видна надпись "Сколько тебе лет?"

// let age = prompt('Сколько тебе лет?', 100);

// alert(`Тебе ${age} лет!`);

// const x = document.querySelector('#message');
// x.textContent = `Тебе ${age} лет!`;

// console.log(age);




//   -------  Правильная РЕАЛИЗАЦИЯ (С СЕТ-ТАЙМАУТОМ) -------

// main.js
const x = document.querySelector('#message');
x.textContent = `Сколько тебе лет?`;

// Используем небольшой таймаут, чтобы текст отобразился перед prompt
setTimeout(() => {
    let age = prompt('Сколько тебе лет?', 100);
    alert(`Тебе ${age} лет!`);
    x.textContent = `Тебе ${age} лет!`;
    console.log(age);
}, 0);