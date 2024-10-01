// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";

btn.addEventListener('click', () => {
  // при нажатии на первую кнопку
  // работайте с clonedBtn
  // ваш код начинается здесь

  // let newBotton = document.createElement('magic-btn')
  // newBotton.className = 'second-btn'
  // newBotton.style.color = 'white'
  // newBotton.style.backgroundColor = '#a78b71'
  // newBotton.innerText = 'Я изменю тебя'
  // newBotton.id = "magic-btn-3"
  // document.body.append(newBotton)

  clonedBtn.className = 'second-btn'
  clonedBtn.style.color = 'white'
  clonedBtn.style.backgroundColor = '#a78b71'
  clonedBtn.innerText = 'Я изменю тебя'

  document.body.append(clonedBtn)
})

clonedBtn.addEventListener('click', () => {
  let text = document.getElementById('magic-btn')
  text.style.color = 'black'
  text.style.backgroundColor = '#9c4a1a'
})

// здесь можете создать EventListener для второй кнопки