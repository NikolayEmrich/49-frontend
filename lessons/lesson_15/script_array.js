// Массив для хранения задач

let tasks = [
    { text: 'Сделать домашку', completed: true },
    { text: 'Повторить', completed: false },
    { text: 'Купить молоко', completed: false }
];

// Можно начинать с пустого массива, но в первоначальном варианте задания уже есть 2 задачи!
// let tasks = [];

// Получаем необходимые элементы DOM
const taskInput = document.querySelector('.task-input');
const createButton = document.querySelector('.actions .btn');
const list = document.querySelector('.list');
const filterButtons = document.querySelectorAll('.status .btn');

// Получаем элемент аудио для воспроизведения звука
const addMusic = document.getElementById('music');

// Функция для создания задачи в массиве
function addTask(taskText) {
    const task = {
        text: taskText,
        completed: false // По умолчанию задача не выполнена
    };
    tasks.push(task);

    // Воспроизводим звук при добавлении задачи
    addMusic.play();

    renderTasks();
}

// Функция для перерисовки задач на основе массива
function renderTasks(filter = 'all') {
    list.innerHTML = ''; // Очищаем старые элементы перед добавлением новых

    // Фильтрация задач в зависимости от выбранного фильтра
    const filteredTasks = tasks.filter(task => {
        if (filter === 'all') return true;
        if (filter === 'completed') return task.completed;
        if (filter === 'uncompleted') return !task.completed;
    });

    // Отображаем отфильтрованные задачи
    filteredTasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-item');
        if (task.completed) {
            listItem.classList.add('list-item_done'); // Добавляем класс, если задача выполнена
        }
        listItem.textContent = task.text;

        // Добавляем событие на клик для изменения состояния задачи
        listItem.addEventListener('click', () => {
            toggleTask(index);
        });

        list.appendChild(listItem);
    });
}

// Функция для изменения состояния задачи (выполнено/не выполнено)
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed; // Меняем состояние задачи
    renderTasks(); // Перерисовываем список
}

// Обработчик на кнопку "Создать"
createButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        addTask(taskText); // Добавляем задачу в массив
        taskInput.value = ''; // Очищаем поле ввода
    }
});

// Обработчики для фильтрации задач
filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const filter = e.target.id; // Получаем id кнопки (all, completed, uncompleted)
        renderTasks(filter); // Перерисовываем задачи с выбранным фильтром
    });
});

renderTasks();