const getNameInfo = async (name) => {
    const fetchResult = await fetch(`https://api.genderize.io/?name=${name}`);
    const responseBody = await fetchResult.json();
    renderResultElement(responseBody);
}

getNameInfo('John');

const inputNameElement = document.querySelector('#name-form input');
const submitButtonElement = document.querySelector('#name-form button');
const showResultElement = document.querySelector('#result');

submitButtonElement.addEventListener('click', submitButtonHeader);

function submitButtonHeader(evt) {
    evt.preventDefault();
    if(inputNameElement.value) {
        getNameInfo(inputNameElement.value);
    } else {
        alert('Введите все таки имя!')
    }
}

function renderResultElement(responseBody) {
    const translateName = responseBody.gender === 'male' ? 'мужской' : 'женский';
    showResultElement.textContent = `Ваш пол ${translateName} с вероятностью ${responseBody.probability * 100}%`
}