const largestOfFour=require('./el_numero_mas_Grande')

//Instrucciones: hacer un script en jest que haga pruebas a esta funcion, minimo 20 pruebas. Aqui un ejemplo de como funciona

test('Test: Debe indicar cual es el numero mas grande del arreglo', () => {
    expect(largestOfFour([[4, 5, 54, 3]])).toContain(54);
});

test('Test: Debe indicar cual es el numero mas grande del arreglo', () => {
    expect(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1], [100, 345001, 857, 1]])).not.toContain(1);
});

test('Test: Debe indicar cual es el numero mas grande del arreglo', () => {
    expect(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1], [100, 345001, 857, 1]])).toContain(5, 27, 39, 1001, 345001);
});

test('Test: Debe indicar cual es el numero mas grande del arreglo', () => {
    expect(largestOfFour([[0.1, 5, 5.4, 3]])).toContain(5.4);
});

test('Test: Debe indicar cual es el numero mas grande del arreglo', () => {
    expect(largestOfFour([[3.3, 2, 1.3, 3]])).toContain(3.3);
});

test('Test: Debe indicar cual es el numero mas grande del arreglo', () => {
    expect(largestOfFour([[0, 0, 0, 0]])).toContain(0);
});

test('Test: Debe indicar cual es el numero mas grande del arreglo', () => {
    expect(largestOfFour([[0, 0, 0, 0]])).not.toBeNull();
});

test('Test: Debe indicar cual es el numero mas grande del arreglo', () => {
    expect(largestOfFour([[1, 1, 1, 1]])).toContain(1);
});

test('Test: Debe indicar cual es el numero mas grande del arreglo con mumeros decimales', () => {
    expect(largestOfFour([[3.3, 2, 1.3, 3]])).toHaveLength(1);
});

test('Test: Debe indicar cual es el numero mas grande del arreglo, validar que sea array la respuesta', () => {
    expect(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1], [100, 345001, 857, 1]])).toHaveLength(5);
});

test('Test: Debe indicar cual es el numero mas grande del arreglo, verificar que el array de respuesta contenga la respuesta en array', () => {
    expect(largestOfFour([[0, 0, 0, 0]])).toEqual(
        expect.arrayContaining([0]));
});

test('Test: Debe indicar cual es el numero mas grande del arreglo', () => {
    expect(largestOfFour([[1, 1, 1, 1]])).toContain(1);
});

test('Test: Debe indicar cual es el numero mas grande del arreglo, verificar que no contenga en el array el numero 5', () => {
    expect(largestOfFour([[0.1, 5, 5.4, 3]])).not.toEqual(
        expect.arrayContaining([5]));
});

test('Test: Debe indicar cual es el numero mas grande del arreglo', () => {
    expect(largestOfFour([[3.3, 2, 1.3, 3]])).toContain(3.3);
});

test('Test: Debe indicar cual es el numero mas grande del arreglo', () => {
    expect(largestOfFour([['', '', '', '']])).toContain(0);
});

test('Test: Debe indicar cual es el numero mas grande del arreglo', () => {
    expect(largestOfFour([[0, 0, 0, 0]])).not.toBeNull();
});

test('Test: Debe indicar cual es el numero mas grande del arreglo con numero negativos', () => {
    expect(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1], [100, -345001, 857, 1]])).not.toContain(-345001);
});

test('Test: Debe indicar cual es el numero mas grande del arreglo', () => {
    expect(largestOfFour([[4, 5, 1, 3], [13, -27, 18, 0.26], [32, 35, 37, 39], [1000, 1001, 857, 1], [100, -345001, 857, 1]])).not.toContain(-345001);
});

test('Test: Debe indicar cual es el numero mas grande del arreglo, con conjunto de arreglo pequenos', () => {
    expect(largestOfFour([[4, 5, 1, 3], [13, -27, 18, 0.26],[32, 885, 39], [32, 35, 37, 39], [1000, 1001, 857, 1], [100, -345001, 857, 1]])).toContain(885);
});

test('Test: Debe indicar cual es el numero mas grande del arreglo, con conjuntos de arreglos mas pequenos', () => {
    expect(largestOfFour([[1, 1, 1, 1],[13],[32, 885]])).toContain(1);
});