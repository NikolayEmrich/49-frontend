function sayHi() {
    alert('Привет! Прошло 3 секунды!');
  }
  
  setTimeout(sayHi, 3000);


//      ---------      С аргументами:     ---------      
// function sayHi(phrase, who) {
//   alert( phrase + ', ' + who );
// }
// setTimeout(sayHi, 1000, "Привет", "Джон"); // Привет, Джон

//      ---------      В одну строку    ---------  
// setTimeout("alert('Привет')", 1000);

//      ---------      В одну строку (функцией)    ---------  
setTimeout(() => alert('Привет'), 1000);
