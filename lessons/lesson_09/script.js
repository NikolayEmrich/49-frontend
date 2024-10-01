console.log('Hello, DOM!')
console.log(document)
console.dir(document)
console.dir(document.body)

// Поиск элемента по тэгу
console.log(document.getElementsByTagName('h2')[0])

let heading = document.getElementsByTagName('h2')[0]
console.log(heading)

// Перезапись значения 
heading.innerText = 'Lesson 09. Dom intro !!!'

// Поиск по классу
let ul = document.getElementsByClassName('method-list')[0]

// Стили можно поменять обращением к свойству style
// ul.style.listStyleType = 'none'

ul.className = 'method-list'
console.log(ul)

// Поиск по ID
let desc = document.getElementById('desc')
// Изменить цвет элемента
// desc.style.color = 'darkred'

// Добавили элементу заранее прописанный класс
desc.className = 'desc'
console.log(desc)

// 4. Поиск через универсальный .querySelector()
let descInfo = document.querySelector('#desc-info')
descInfo.className = 'desc-info'
console.log(descInfo)

// Работы с интерактивными элементами
let btnChangeHeading = document.querySelector('#btn-change-heading')
let btnHideList = document.querySelector('#btn-hide-list')
let btnCreateElement = document.querySelector('#btn-create-element')

// Функция слушатель событий "addEventListener" принимает в себя два параметра.
// 1. Описание события, например "click"
// 2. Функция с действием, которые мы хотим произвести при срабатывании события
btnChangeHeading.addEventListener('click', () => {
    heading.style.color = 'red'
    heading.style.fontSize = '40px'
})

btnHideList.addEventListener('click', () => {
    // Метод toggle добавляет класс если его нет и убирает если он есть!
    ul.classList.toggle('hide')
})

btnCreateElement.addEventListener('click', () => {
    // Метод создания нового элемента
    let newElement = document.createElement('p')
    newElement.innerText = 'Кажется я начинаю понимать этот DOM...'
    newElement.className = 'dom-result'
    // Добавляем элемент в конец body через метод append()
    document.body.append(newElement)
})
