const items = document.querySelectorAll('.item');
const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlayImg');
const overlayText = document.getElementById('overlayText');
const overlayContent = document.getElementById('overlayContent');

// Данные для overlay (другие картинки и текст)
const overlayData = {
    1: { img: "img/t1.jpg", text: "Время, за которое песок через горловину пересыпается в другой сосуд, может составлять от нескольких секунд, до нескольких часов. Несмотря на то что они называются «часами», они практически не используются как часы для определения времени суток." },
    2: { img: "img/t2.jpg", text: "Наиболее частое применение песочные часы имеют в виде таймера для определения фиксированных промежутков времени, например, для отсчёта времени физпроцедур в физкабинетах." },
    3: { img: "img/t3.jpg", text: "Хотя они имеют своего предшественника в виде древнеегипетских водяных часов (клепсидр), в виде песочных часов, по-видимому, являются средневековым изобретением. Самое раннее упоминание об их существовании является иконографическим и символическим на серии фресок «Аллегория хорошего и плохого правления», датируемых 1338 годом в Палаццо Пубблико в Сиене Амброджо Лоренцетти" }
};

// Клик по карточке
items.forEach(item => {
    item.addEventListener('click', () => {
        const num = item.dataset.num;

        overlay.style.display = "flex";
        overlayImg.src = overlayData[num].img;
        overlayText.textContent = overlayData[num].text;

        // Плавное появление overlay
        setTimeout(() => {
            overlayContent.style.opacity = 1;
            overlayContent.style.transform = "translateY(0)";
        }, 50);
    });
});

// Клик по затемнению закрывает overlay
overlay.addEventListener('click', () => {
    overlayContent.style.opacity = 0;
    overlayContent.style.transform = "translateY(20px)";

    setTimeout(() => {
        overlay.style.display = "none";
    }, 300);
});