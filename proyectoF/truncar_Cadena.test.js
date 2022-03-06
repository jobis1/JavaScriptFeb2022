//Instrucciones: crea una prueba para cada una de estas validaciones, nota estas validaciones pasan.
// Además aggrega el codigo que hace falta en el script truncar_Cadena.js para que las pruebas pasen

const truncar = require("./truncar_Cadena");

let cadena =
  "Siempre codifica como si la persona que finalmente mantendrá tu código fuera un psicópata violento que sabe dónde vives";

test("Test: funcion que devuelve 60 posiciones de la cadena segun la cantidad de caracteres indicado", () => {
  console.log(truncar(cadena, 60));
});

test("Test: funcion que devuelve 8 posiciones de la cadena", () => {
  expect(truncar(cadena, 8)).toBe("Siempre ...");
});

test("Test: funcion que devuelve 10 posiciones de la cadena", () => {
  expect(truncar(cadena, 10)).toBe("Siempre co...");
});
test("Test: funcion que devuelve 20 posiciones de la cadena", () => {
  expect(truncar(cadena, 20)).toBe("Siempre codifica com...");
});

test("Test: funcion que devuelve 50 posiciones de la cadena", () => {
  expect(truncar(cadena, 50)).toBe(
    "Siempre codifica como si la persona que finalmente..."
  );
});

test("Test: funcion que devuelve 50 posiciones de la cadena", () => {
  expect(truncar(cadena, 50)).not.toBe(
    "Siempre codifica como si la persona que finalmente mantendrá..."
  );
});
