//Tarea: encontrar numeros impares y pares en un arreglo con numeros del 0 al 100

const array = 100;
let pares = [];
let impares = [];

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    pares.push(i);
  } else {
    impares.push(i);
  }
}
console.log("Los numeros pares son: " + pares);
console.log("Los numeros impares son: " + impares);

// Tarea: Three company; input asd output aaasssdd   * Usando una funcion

function repetir(texto) {
  var temp = "";
  for (var i = 0; i < texto.length; i++) {
    for (var x = 0; x < 3; x++) {
      temp += texto[i];
    }
  }
  return temp;
}

console.log("Respuesta:", repetir("Ana"));

//TAREA: Palindromo "ana", "oso", "casa"

/*
input   output
casa    No es un palindromo
oso     Si es un palindromo
ana     Si es un palindromo
*/
function palindromo(str) {
  const strReversed = str.split("").reverse().join("");

  return strReversed === str ? "es palindromo" : "no es palindromo";
}
console.log(palindromo("oso"));
console.log(palindromo("casa"));
console.log(palindromo("ana"));

/*Tarea: Crear una funcion que regrese la siguente cadena
input       output
Marcia      una manzana para Marcia y una manzana para mi
Paco        una manzana para Paco y una manzana para mi
""          una manzana para ti y una manzana para mi
87987       Error

*/

let str;
function busca(str) {
  if (str === "Marcia") {
    return console.log(`una manzana para ${str} y una manzana para mi`);
  } else if (str === "Paco") {
    console.log("Correcto");
    return console.log(`una manzana para ${str} y una manzana para mi`);
  } else if (str === "") {
    return console.log(`una manzana para ti y una manzana para mi`);
  } else return console.log("error");
}

console.log(busca("Paco"));
