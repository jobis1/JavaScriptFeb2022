
const operaciones = require("./operaciones");

test("Validar que una funcion nos regrese la cadena Hola Mundo", () => {
  expect(operaciones.holaMundo()).toBe("Hola Mundo!");
});

test("Validar que una funcion NO regrese la cadena Hola amigo", () => {
  expect(operaciones.holaMundo()).not.toBe("Adios Amigo");
});

test("Validar que una funcion NO tenga el mismo valor de una variable", () => {
  let hi = " Hi my fiend";
  expect(operaciones.holaMundo()).not.toBe(hi);
});

test("Validar que una funcion NO nos regrese un valor Null", () => {
  expect(operaciones.holaMundo()).not.toBeNull();
});

test("Validar que una funcion que no regrese una cadena Undefined", () => {
  expect(operaciones.holaMundo()).not.toBeUndefined();
});

test("Validar que una funcion que no contenga la palabra Aloha", () => {
  let alo = " alo";
  expect(operaciones.holaMundo()).not.toContain("Aloja");
});


test("Validar que una cadena no devuelva un numero", () => {
    let alo = " alo";
    expect(operaciones.holaMundo()).not.toBe('number');
  });
  

test("Validar que una funcion nos devuelva un numero de caracteres", () => {
    expect((operaciones.holaMundo()).length).toEqual(11);
  });
  
  test("Validar que una cadena no devuelva un numero", () => {
    expect(typeof(operaciones.holaMundo())).not.toBe('number');
  });
  
  test("Validar que la funcion que suma 2 mas 2 regresa un numero", () => {
    expect(typeof(operaciones.suma(2,2))).toBe('number');
  });
  

  test("Validar que la funcion que suma 2 mas 2 regresa un numero", () => {
    expect(typeof(operaciones.suma(2,2))).not.toBe('string');
  });
  
  test("Validar que la funcion que suma 2 mas 2 regresa un numero", () => {
    expect(operaciones.suma(2,2)).toBeGreaterThan(0);
  });

  var arrayPrueba = ["Hidrogeno", "Helio", "Litio", "Carbon","Berilio"];

  test("Probar el numero de caracteres de cada elementro del array",() =>{
      expect(operaciones.cuentaLetras(arrayPrueba)).toEqual([9,5,5,6,7]);
  });

  test("Probar que una funcion NO devuelve el numero incorrecto de caracteres de cada elementro del array",() =>{
    expect(operaciones.cuentaLetras(arrayPrueba)).not.toEqual([8,6,7,4,9]);
});

test("Validar que una funcion regresa un objeto con usuario y password",() =>{
    expect(operaciones.createUser("Carlos", "123asd")).toEqual({name:"Carlos", pass:"123asd"});
});


test("Validar regresa solo se aceptan letras, caundo se le envia un boleano",() =>{
    expect(operaciones.minusculas("hola")).toBe("Solo se aceptan Letras");
});
