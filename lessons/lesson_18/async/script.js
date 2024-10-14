const taskList = document.querySelector('#task-list')

// Создаем асинхронную функцию с поомощью синтаксиса async / await

// Перед обхъявление м функции пишем ключевое слово async
async function getData() {

    try {
        
        // Объявляем переменную и через ключевое слово await дожидаемся результат fetch-запроса
        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    
        if(!res.ok) {
            console.log(res)
            throw new Error(`Network error! ${res.status}`)
        }

        // Объявляем переменную и через await дожидаемся результат метода json()
        const data = await res.json();
        // console.log(data) ---- ДЛЯ ПРОВЕРКИ
        const shortData = data.slice(0, 15)
        shortData.map(task => {
            const li = document.createElement('li')
            li.textContent = task.title
    
            if (task.completed) {
                li.classList.add('completed')
            }
    
            // Вариант отображения данных с форматом
            // li.textContent = `Completed: ${task.completed} ${task.title}`
    
            taskList.append(li)
        })

    } catch (error) {
        console.log('Error:', error.message)
    }
}

getData()