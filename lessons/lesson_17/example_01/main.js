// ---- Самостоятельное создание промеса ----

// Вызываем конструктор промеса
const promiseExample = new Promise(
    (res, rej) => {
        let randomNumber;

        // Симулирууем функцию!
        setTimeout(() => {
            randomNumber = Math.random();
            if(randomNumber > 0.5) {
                res(randomNumber);
            } else {
                rej(randomNumber);
            }
        }, 15000);
    }
);

console.log(promiseExample);


