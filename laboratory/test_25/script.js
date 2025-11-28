const circles = document.querySelectorAll('.circle');
const zoomCircle = document.getElementById('zoomCircle');
const message = document.getElementById('message');

// Возврат назад — вылет из круга
function reset() {
    zoomCircle.style.transform = `scale(0)`;
    zoomCircle.style.opacity = 0;

    message.style.opacity = 0;
    message.style.transform = "translateY(30px)";
}

circles.forEach(circle => {
    circle.addEventListener('click', event => {

        event.stopPropagation(); // чтобы клик по кругу не вызывал reset

        const rect = circle.getBoundingClientRect();

        // Центр круга
        const centerX = rect.left + rect.width / 2 + window.scrollX;
        const centerY = rect.top + rect.height / 2 + window.scrollY;

        // Задаём маленький начальный размер (должен совпадать с CSS)
        const baseSize = 100; 

        // Устанавливаем стартовую позицию zoomCircle точно по центру кнопки
        zoomCircle.style.width = baseSize + "px";
        zoomCircle.style.height = baseSize + "px";

        zoomCircle.style.left = (centerX - baseSize / 2) + "px";
        zoomCircle.style.top = (centerY - baseSize / 2) + "px";

        zoomCircle.style.opacity = 1;

        // Влёт
        setTimeout(() => {
            zoomCircle.style.transform = `scale(12)`; 
        }, 10);

        // Появление текста
        setTimeout(() => {
            message.textContent = "Вы нажали " + circle.dataset.num;
            message.style.opacity = 1;
            message.style.transform = "translateY(0)";
        }, 400);

        // Кликом вне круга — вылет
        document.body.addEventListener('click', reset, { once: true });
    });
});