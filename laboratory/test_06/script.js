const b = document.querySelector('#button')
const n = document.querySelector('#number')

const addMusic = document.getElementById('music');


b.addEventListener('click', () => {
    n.textContent = getRandomInt(1, 7);
    addMusic.play();
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}