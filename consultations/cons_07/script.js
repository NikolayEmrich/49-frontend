const vEB = document.querySelector('#vEB')
const vED = document.querySelector('#vED')
const vEI = document.querySelector('#vEI')

const changeInfo = () => {
    
    if (vED.innerHTML === "I WANT TO BREAK FREE!") {
        vED.textContent = "Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great."
    } else {
        vED.textContent = "I WANT TO BREAK FREE!"
        console.log("ELSE is worked now!")
    }

}

vEB.addEventListener('click', changeInfo);