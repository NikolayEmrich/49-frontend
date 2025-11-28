const circles = document.querySelectorAll('.circle');
const overlay = document.getElementById('overlay');
const overlayContent = document.getElementById('overlayContent');

circles.forEach(circle => {
    circle.addEventListener('click', () => {
        const num = circle.dataset.num;
        overlayContent.textContent = `Вы нажали ${num}`;
        overlay.classList.add('active');
    });
});

// Закрытие при клике по затемнению
overlay.addEventListener('click', () => {
    overlay.classList.remove('active');
});