const items = document.querySelectorAll('.item');
const overlay = document.getElementById('overlay');
const overlayText = document.getElementById('overlayText');

// КЛИК ПО ГРИДУ
items.forEach(item => {
    item.addEventListener('click', () => {
        const num = item.dataset.num;

        overlay.style.display = "flex";
        overlayText.textContent = `Вы нажали ${num}`;

        // плавное проявление текста
        setTimeout(() => {
            overlayText.style.opacity = 1;
            overlayText.style.transform = "translateY(0)";
        }, 50);
    });
});

// КЛИК ПО ЗАТЕМНЕНИЮ – ЗАКРЫВАЕМ
overlay.addEventListener('click', () => {
    overlayText.style.opacity = 0;
    overlayText.style.transform = "translateY(20px)";

    setTimeout(() => {
        overlay.style.display = "none";
    }, 300);
});