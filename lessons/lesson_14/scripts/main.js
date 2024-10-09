const headerElement = document.querySelector('.header');
headerElement.innerText = 'Калькулятор';
console.log(headerElement);
headerElement.classList.add('red');


// const inputElements = document.querySelectorAll('input');
// console.log([...inputElements]);
// console.log(inputElements[0].value);

// создание элемента Кнопка
const submitButtonElement = document.createElement('button');
submitButtonElement.innerText = 'Результат';
submitButtonElement.classList.add('submit-button');

// добавляем созданный элемент в определенное место
headerElement.after(submitButtonElement);

// Создадим функцию с реакцией на клик по кнопке
const submitButtonHandler = () => {
    // console.log('Кнопку нажали');

    // Ищем необходиме элементы
    const inputElements = document.querySelectorAll('input');

    //Запишем импуты в переменные
    const element1 = inputElements[0].value;
    const element2 = inputElements[1].value;

    // parse / Number() / +
    const sum = +element1 + +element2;
    console.log(sum);

    // Создадим элемент для вывода на страничку!
    const resultElement = document.createElement('span');

    // Заполним данными (рузельтатом)!
    resultElement.innerText = sum;

    // Отобразим результат на страничке!
    const bodyElement = documnet.querySelector('body'); // document.body
    bodyElement.append(resultElement);
    // body можно не искать отдельно
    // можно использовать document.body.append....
}

// Добавляем на кнопку действие

// Для добавления функции....
// submitButtonElement.addEventListener('click', () => {});

submitButtonElement.addEventListener('click', submitButtonHandler);
// console.log('JavaScript');