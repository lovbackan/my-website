console.log(`Hello world`);

const currentYear = new Date().getFullYear();
console.log(currentYear);

const calcAge = function() {
    const födelseÅr = 1994;
    const ålder = currentYear - födelseÅr;
    console.log(ålder);
    return ålder;
    //vilket år det är måste uppdateras 
}

// 1. Hitta elementet som har ID "myAge"
// 2. Uppdatera innehållet med datan från calcAge

const myAge = document.getElementById("myAge");
myAge.innerHTML += " " + calcAge();

// document.getELemntById ("???"); om vi ger en p tagg ett id, så kan vi targeta specifikt den!
// myAge.innerHTML += " " + calcAge(); EXECTUAS DIREKT, 

// myAge.innerHTML + clacAge();
