const dateText = document.querySelector('#today');
const cityText = document.querySelector('.city-text');
const weatherText = document.querySelector('#weather');
const temperatureText = document.querySelector('.temperature-now-text');
const imgBig = document.querySelector('#icon-big');

// cityText.textContent = 'dsdsdsadsds';

async function allWeather() {

    const res = await fetch('http://api.weatherapi.com/v1/current.json?key=457c7925b2764ff8bed82246241610&q=Berlin&aqi=no')
    const data = await res.json();
    console.log(data)

    const misterD = { weekday: 'long' };
    const dayOfWeek = new Date().toLocaleString('en-US', misterD);

    const shortCountry = data.location.country.slice(0, 2).toUpperCase()
    

    const dataNow = data.current.last_updated.slice(0, 10)

    dateText.textContent = `${dayOfWeek}, ${dataNow}`
    cityText.textContent = `${data.location.region}, ${shortCountry}`
    temperatureText.textContent = `${data.current.temp_c}°`
    weatherText.textContent = data.current.condition.text
    imgBig.src = data.current.condition.icon

    // const x = data.location.name;
    // cityText.textContent = x;
    // console.log(x)

    // На уроке пытались вывести номер месяца!
    // console.log(data.location.localtime.slice(5,7))

}

allWeather()



// showResultElement.textContent = `Ваш пол ${translateName} с вероятностью ${responseBody.probability * 100}%`