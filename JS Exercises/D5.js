/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log("-------------------------------------Esercizio 1-------------------------------------");
const pets = ["dog", "cat", "hamster", "redfish"];
for (let index = 0; index < pets.length; index++) {
  console.log(pets[index]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("-------------------------------------Esercizio 2-------------------------------------");

pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log("-------------------------------------Esercizio 3-------------------------------------");

for (let index = pets.length - 1; index >= 0; index--) {
  console.log(pets[index]);
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("-------------------------------------Esercizio 4-------------------------------------");

pets.shift();
pets.push("cat");
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

console.log("-------------------------------------Esercizio 5-------------------------------------");

cars[0]["licensePlate"] = "1234";
cars[1]["licensePlate"] = "1234";
cars[2]["licensePlate"] = "1234";
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

console.log("-------------------------------------Esercizio 6-------------------------------------");

cars.push({
  brand: "Alfa",
  model: "Mito",
  color: "black",
  trims: ["sport", "confort"],
});

// console.log(cars);

for (let index = 0; index < cars.length; index++) {
  cars[index].trims.pop();
}

console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

console.log("-------------------------------------Esercizio 7-------------------------------------");

const justTrims = [];

for (let index = 0; index < cars.length; index++) {
  justTrims.push(cars[index].trims);
}

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("-------------------------------------Esercizio 8-------------------------------------");

for (let index = 0; index < cars.length; index++) {
  if (cars[index].color.charAt(0) === "b") {
    console.log("Fritz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

console.log("-------------------------------------Esercizio 9-------------------------------------");
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];

let i = 0;
while (i < numericArray.length && numericArray[i] !== 32) {
  console.log(numericArray[i]);
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

console.log("-------------------------------------Esercizio 10-------------------------------------");

const charactersArray = ["g", "n", "u", "z", "d"];
const newArray = [];
console.log("Array vuoto", newArray);
for (let index = 0; index < charactersArray.length; index++) {
  switch (charactersArray[index]) {
    case "g":
      newArray.push("6");
      break;
    case "n":
      newArray.push("12");
      break;
    case "u":
      newArray.push("19");
      break;
    case "z":
      newArray.push("21");
      break;
    case "d":
      newArray.push("4");
      break;

    default:
      break;
  }
}
console.log("Array pieno", newArray);
