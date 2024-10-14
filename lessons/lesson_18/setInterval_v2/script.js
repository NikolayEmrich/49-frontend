// Находим картинку в DOM дереве
const dogImg = document.querySelector('#img-dog')

// Найти кнопки
const getDog = document.querySelector('#get-dog')
const btnToggle = document.querySelector('#btn-stop')

// ---- В ЭТОМ ПРИМЕРЕ МЫ СОЗДАДИМ ПЕРЕМЕННУЮ КОТОРАЯ БУДЕТ ЗАПУСКАТЬ/ОСТАНАВЛИВАТЬ НАШ ИНТЕРВАЛ
let isRunning = false

// Объявляем функцию для получения картинки
const fetchDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            dogImg.src = data.message
    });
}

// Вызываем функцию
fetchDog()

// Кладем вызов интервала в переменную
// ...

// Объявляем переменную вне пределов функции
let dogInterval

// Функция страт/стоп интервала для подгрузки кртинки
const toggleInterval = () => {
    if (!isRunning) {
        dogInterval = setInterval(fetchDog, 3000)
        btnToggle.textContent = 'Stop dog update'
        isRunning = true
    } else {
        clearInterval(dogInterval)
        btnToggle.textContent = 'Star dog update'
        isRunning = false
    }
}

// Передаем функцию в слушатель событий
getDog.addEventListener('click', fetchDog)

// Смена картирки без кнопки
// setInterval(fetchDog, 5000)

// Смена картинки по кнопке
// btnToggle.addEventListener('click', () => {
    // Чистим интервал
//     clearInterval(dogInterval)
// })

// Смена картинки (запуск/стоп) по кнопке
btnToggle.addEventListener('click', toggleInterval)