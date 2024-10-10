console.log('Program started');

// setTimeout
setTimeout (() => {
    console.log("Асинхронный контроль лог 5000 №1");
}, 5000);

setTimeout (() => {
    console.log("Асинхронный контроль лог 5000 №2");
}, 5000);

setTimeout (() => {
    console.log("Асинхронный контроль лог 2000");
}, 2000);


//setInterval
const ii = setInterval( () => {
    console.log("Сетинтервал - " + Date.now());
}, 2000);

console.log(ii); // Вернет "number" - id процедуры
// Какформируется не совсем понял ???

setTimeout( () => {
    clearInterval(ii)
}, 6000);

console.log('Все прошло хорошо!')