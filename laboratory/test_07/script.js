const b = document.querySelector('#button')
const n = document.querySelector('#number')
const img = document.querySelector('#img')

const addMusic = document.getElementById('music');


b.addEventListener('click', () => {
    const x = getRandomInt(1, 7);
    console.log(x);

    if (x === 1) {
        img.src = './img/1.jpg'
    } else if (x === 2) {
        img.src = './img/2.jpg'
    } else if (x === 3) {
        img.src = './img/3.jpg'
    } else if (x === 4) {
        img.src = './img/4.jpg'
    } else if (x === 5) {
        img.src = './img/5.jpg'
    } else {
        img.src = './img/6.jpg'
    }
    
    addMusic.play();
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}