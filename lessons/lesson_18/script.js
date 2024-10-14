// Находим картинку в DOM дереве
const dogImg = document.querySelector('#img-dog')

// Найти кнопку
const getDog = document.querySelector('#get-dog')

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

// Передаем функцию в слушатель событий
getDog.addEventListener('click', fetchDog)


// Возвращает promise. 
// Обычно fetch не кладется в переменную.
// const answer = fetch("https://dog.ceo/api/breeds/image/random");
// console.log(answer);

// ------- ВСЕ ЭТО ЗАКОМЕНТИРОВАНО И ОТПРАВЛЕНО В ФУНЦИЮ FETCHDOG ВЫШЕ --------

// Запрос за данными через fetch-запрос - в ответе promise в состоянии pending (ожидание данных).
// fetch("https://dog.ceo/api/breeds/image/random")
// Дожидаемся "сырых" данных и обрабатываем с помощью асинхронного метода json()
    // .then(res => res.json())
// Дожидаемся выполнения json() и получаем наши данные
    // .then(data => {
        // Переписываем значения src в картинке
        // dogImg.src = data.message
    // });
    