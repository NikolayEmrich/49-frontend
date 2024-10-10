console.log('Program started');
// const nameOfUser = prompt('Введите свое имя!');

const inputElement = document.querySelector('input');
const buttonElement = document.querySelector('button');

buttonElement.addEventListener('click', () => {
    console.log(`Hello, ${inputElement.value}`);
})

// const nameOfUser = inputElement.value;

console.log('Цикл начался!');
const startDate = Date.now();
for(let i = 0; i < 3000000000; i++) {
    const a = i;
}
const endDate = Date.now();
console.log('Цикл закончился через ' + (endDate - startDate));

console.log('Все прошло хорошо!')
// console.log(`Hello, ${nameOfUser}`);