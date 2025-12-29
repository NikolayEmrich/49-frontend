async function loadRandomSpell() {
const card = document.getElementById('card');
card.innerHTML = "Загрузка...";


try {
const res = await fetch('https://www.dnd5eapi.co/api/spells');
const data = await res.json();
const spells = data.results;


if (!spells || spells.length === 0) {
card.innerHTML = "Заклинаний нет.";
return;
}


const randomSpell = spells[Math.floor(Math.random() * spells.length)];

// создаем отдельную переменную для ссылки
const link = `https://www.dnd5eapi.co${randomSpell.url}`;

card.innerHTML = `<h3>${randomSpell.name}</h3><a href='${link}' target='_blank'>Подробнее</a>`;
} catch (e) {
card.innerHTML = "Ошибка загрузки.";
}
}