// Hometask_18
// Поработайте с двумя новыми APi:
// одна дает случайные факты о кошках
// https://catfact.ninja/fact

// другая случайные фото кошек
// https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1

// заберите данные из API и отобразите на странице используя синтаксис async / await.
// добавьте кнопку для обновление факта и кошки

const btnUpdate = document.getElementById('btn-update')
const content = document.querySelector('#content')

async function fetchCatImg() {
    const res = await fetch('https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1')
    const data = await res.json()
    
    const catImg = document.createElement('img')
    catImg.src = data[0].url
    catImg.classList.add('cat-img')
    content.append(catImg)
    console.log(catImg)

    console.log(data)
}

fetchCatImg()

const getCatFact = async () => {
    const res = await fetch('https://catfact.ninja/fact')
    const data = await res.json()
    console.log(data)

    const p = document.createElement('p')
    p.textContent = data.fact
    content.append(p)
}

getCatFact()

btnUpdate.addEventListener('click', () => {
    // Этот цикл чистит контейнер от предыдущих результатов. Пока там есть хоть один элемент цикл будет удалять их пока их не останется
    while (content.firstChild) {
        content.removeChild(content.firstChild)
    }
    fetchCatImg()
    getCatFact()
})