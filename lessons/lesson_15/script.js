// Получаем необходимые элементы DOM
const taskInput = document.querySelector('.task-input');
const createButton = document.querySelector('.actions .btn');
const list = document.querySelector('.list');
const filterButtons = document.querySelectorAll('.status .btn');

// Функция для создания новой задачи
function createTask(taskText) {
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');
    listItem.textContent = taskText;

    // Добавляем событие по клику для завершения задачи
    listItem.addEventListener('click', () => {
        listItem.classList.toggle('list-item_done'); // --- toggle() - включает или выключает класс выбранный в () элементу
    });

    // Добавляем задачу в список
    list.appendChild(listItem);
}

// Обработчик на кнопку "Создать"
createButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim(); // --- trim() - Убирает лишние пробелы по бокам!
    if (taskText) {
        createTask(taskText);
        taskInput.value = ''; // Очистить поле ввода
    }
});

// Фильтрация задач
filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const filter = e.target.id;
        const tasks = document.querySelectorAll('.list-item');

        tasks.forEach(task => {
            switch (filter) {
                case 'all':
                    task.style.display = 'list-item';
                    break;
                case 'completed':
                    if (task.classList.contains('list-item_done')) {
                        task.style.display = 'list-item';
                    } else {
                        task.style.display = 'none';
                    }
                    break;
                case 'uncompleted':
                    if (!task.classList.contains('list-item_done')) {
                        task.style.display = 'list-item';
                    } else {
                        task.style.display = 'none';
                    }
                    break;
            }
        });
    });
});