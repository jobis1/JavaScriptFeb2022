//Instrucciones: hacer un script en jest que haga pruebas a esta funcion, minimo 20 pruebas. Aqui un ejemplo de como funciona

const checkSign = require('./multiple_Condigicional');


test("Test: funcion que devuelve si un numero es positivo", () => {
    expect(checkSign(10)).toBe('positive');
  });

test("Test: funcion que devuelve si un numero es negativo", () => {
    expect(checkSign(-789)).toBe('negative');
  });

test("Test: funcion que devuelve si un numero es zero", () => {
    expect(checkSign(0)).toBe('zero');
  });

test("Test: funcion que devuelve si un numero es positivo", () => {
    expect(checkSign('899')).toBe("No podemos usar strings");
  });


test("Test: funcion que devuelve si un numero es negativo", () => {
    expect(checkSign('-899')).toBe("No podemos usar strings");
  });

  
test("Test: determinar si la funcion acepta numeros", () => {
    expect(checkSign('letter')).toBe("No podemos usar strings");
  });

test("Test: determinar si la funcion acepta decimales", () => {
    expect(checkSign(0.0)).toBe('zero');
  });

test("Test: funcion que devuelve si un numero es negativo", () => {
    expect(checkSign(-1)).toBe('negative');
  });

test("Test: determinar si se pasa true como parametro", () => {
    expect(checkSign(true)).toBe("No podemos procesar valores Boleanos");
  });

test("Test: determinar si se envian varios numeros con un cero adelante", () => {
    expect(checkSign(0.1)).not.toBe("zero");
  });

test("Test: funcion que devuelve 60 posiciones de la cadena segun la cantidad de caracteres indicado", () => {
    expect(checkSign(10/12)).toBe("positive");
  });

test("Test: funcion que devuelve 60 posiciones de la cadena segun la cantidad de caracteres indicado", () => {
    expect(checkSign(13515)).toBe("positive");
  });

test("Test: funcion que devuelve 60 posiciones de la cadena segun la cantidad de caracteres indicado", () => {
    expect(checkSign(-0.1)).not.toBe("positive");
  });

test("Test: funcion que devuelve 60 posiciones de la cadena segun la cantidad de caracteres indicado", () => {
    expect(checkSign(NaN)).toBe("zero");
  });

test("Test: funcion que devuelve 60 posiciones de la cadena segun la cantidad de caracteres indicado", () => {
    expect(checkSign("")).toBe("No podemos usar strings");
  });

test("Test: funcion que devuelve 60 posiciones de la cadena segun la cantidad de caracteres indicado", () => {
    expect(checkSign(null)).toBe("zero");
  });

test("Test: funcion que devuelve 60 posiciones de la cadena segun la cantidad de caracteres indicado", () => {
    expect(checkSign("//")).toBe("No podemos usar strings");
  });

test("Test: funcion que devuelve 60 posiciones de la cadena segun la cantidad de caracteres indicado", () => {
    expect(checkSign(0,0)).toBe("zero");
  });

test("Test: funcion que devuelve 60 posiciones de la cadena segun la cantidad de caracteres indicado", () => {
    expect(checkSign(0,5)).toBe("zero");
  });

test("Test: funcion que devuelve 60 posiciones de la cadena segun la cantidad de caracteres indicado", () => {
    expect(checkSign(-0,910)).toBe("zero");
  });

test("Test: funcion que devuelve 60 posiciones de la cadena segun la cantidad de caracteres indicado", () => {
    expect(checkSign()).toBe("zero");
  });

test("Test: funcion que devuelve 60 posiciones de la cadena segun la cantidad de caracteres indicado", () => {
    expect(checkSign(!NaN)).toBe("No podemos procesar valores Boleanos");
  });









