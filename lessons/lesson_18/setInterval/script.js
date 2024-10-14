// Находим картинку в DOM дереве
const dogImg = document.querySelector('#img-dog')

// Найти кнопки
const getDog = document.querySelector('#get-dog')
const btnStop = document.querySelector('#btn-stop')

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
let dogInterval = setInterval(fetchDog, 3000)

// Передаем функцию в слушатель событий
getDog.addEventListener('click', fetchDog)

// Смена картирки без кнопки
// setInterval(fetchDog, 5000)

// Смена картинки по кнопке
btnStop.addEventListener('click', () => {
    // Чистим интервал
    clearInterval(dogInterval)
})
    