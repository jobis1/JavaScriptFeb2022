const largestOfFour=require('./el_numero_mas_Grande')

//Instrucciones: hacer un script en jest que haga pruebas a esta funcion, minimo 20 pruebas. Aqui un ejemplo de como funciona

test('Test: convertir -80 grados celsius a fahrenheit y validar que da -112', () => {
    expect(largestOfFour([[4, 5, 54, 3]])).toBe([54]);
});

test('Test: convertir -80 grados celsius a fahrenheit y validar que da -112', () => {
    expect(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1], [100, 345001, 857, 1]])).not.toBe([100, 345001, 857, 1]);
});


