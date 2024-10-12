const inputTimeElement = document.querySelector('#timeInput');
const timerElement = document.querySelector('#timer');
const endTimeMessegaElement = document.querySelector('message');
const startTimerButton = document.querySelector('button');

startTimerButton.addEventListener('click', startTimer);

function startTimer() {
    let time = +inputTimeElement.value;

    const intervalId = setInterval( () => {
        timerElement.textContent = time;
        time--;
        if(time < 0) {
            clearInterval(intervalId);
            endTimeMessegaElement.textContent = "Time end!";
        }
    }, 1000);
}