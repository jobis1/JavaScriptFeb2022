const suma = require ('./suma');

test("Comparar que la suma de 3 y 2 es igual a 5",()=>{
    expect(suma(3,5)).not.toBe(5);
});

test("Comparar que la suma de 3 y 2 es igual a 5",()=>{
    expect(suma(3,2)).not.toBe(10);
});

test("Validar que la suma de dos numeros el resultado es mayor a numero",()=>{
    expect(suma(3,2)).not.toBeGreaterThan(10);
    expect(suma(3,9)).not.toBeGreaterThan(12);
});