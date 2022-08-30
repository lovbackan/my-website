console.log(`Hello world`);

const currentYear = new Date().getFullYear();
console.log(currentYear);

const calcAge = function () {
  const birthYear = 1994;
  const myAge = currentYear - birthYear;
  console.log(myAge);
  return myAge;
  //vilket år det är måste uppdateras
};

// 1. Hitta elementet som har ID "myAge"
// 2. Uppdatera innehållet med datan från calcAge

const myAge = document.getElementById("myAge");
myAge.innerHTML += " " + calcAge();

// document.getELemntById ("???"); om vi ger en p tagg ett id, så kan vi targeta specifikt den!
// myAge.innerHTML += " " + calcAge(); EXECTUAS DIREKT,

// myAge.innerHTML + clacAge();

const powerLevelElement = document.getElementById("powerLevel");

console.log(powerLevelElement);

const powerLevelGif = document.getElementById("powerLevelGif");
console.log(powerLevelGif);

powerLevelGif.addEventListener("click", function () {
  if (Number(powerLevelElement.innerHTML) >= 9000) {
    alert("IT'S OVER NINE THOUSAND!!!!");
  } else {
    powerLevelElement.innerHTML = Number(powerLevelElement.innerHTML) + 1;
  }
});

function sendMessage() {
  const name = document.getElementById("firstName").value;
  const message = document.getElementById("message").value;

  const newMessage = { name: name, message: message };
  console.log(newMessage);

  // TODO: Write to database
  loadMessages();
}

function loadMessages() {
  console.log("afsdfd");
  fetch("database.json")
    .then((response) => response.json())
    .then((json) => console.log(json));
}
