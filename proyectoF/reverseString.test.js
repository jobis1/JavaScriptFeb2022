const reversa = require("./reverseString");

//Instrucciones: hacer pruebas en jest para que valide estas cadenas, minimo 15 pruebas.
test("Test: ...", () => {
  expect(reversa("hola")).not.toBe("Ahol");
});

test("Test: ...", () => {
  expect(reversa("÷∞¢#@∞¢")).not.toBe("÷¢∞#¢@∞");
});

test("Test: ...", () => {
    expect(reversa("gres")).not.toBe("Serg");
});

test("Test: ...", () => {
  expect(reversa("Casita Javascript")).not.toBe("SCRIPT jacsitavaa");
});

test("Test: ...", () => {
  expect(reversa("0987654321")).toBe("1234567890");
});

test("Test: ...", () => {
    expect(reversa("hola")).toBe("aloh");
  });
  
  test("Test: ...", () => {
    expect(reversa("÷∞¢#@∞¢")).toBe("¢∞@#¢∞÷");
  });
  
  test("Test: ...", () => {
      expect(reversa("gres")).toBe("serg");
  });
  
  test("Test: ...", () => {
    expect(reversa("Casita Javascript")).toBe("tpircsavaJ atisaC");
  });
  
  test("Test: ...", () => {
    expect(reversa("0987654321")).not.toBe("0123456789");
  });

test("Test: ...", () => {
  //boolean is not defined hacer esta validacion en código  **Opcional si para hacer que funciones tiene que cambiar la funcion adelante
  expect(reversa(boolean)).toBe("boolean is not defined");
});
