
const laPalabraMasLarga= require ("./laPalabraMasLarga");

//Esta funcion nos regresa el numero de letras de la palabra más grande, acontinuacion ejemplos de como funciona
//Instrucciones: hacer otro scirpt en Jest que haga validaciones para estas cadenas de texto (minimo 20 pruebas), además de poner pruebas que validen que no acepta numeros.

test('Test: Debe devolver el numero de letras de la palabra mas grande de la oracion', () => {
expect(laPalabraMasLarga("No me importa si funciona en su máquina! No me envían su máquina!")).toBe(8);
});

test('Test: Debe devolver el numero de letras de la palabra mas grande de la oracion', () => {
    expect(laPalabraMasLarga("Un lenguaje de programación es de bajo nivel cuando requiere que prestes atencion a lo irrelevante")).toBe(12);
});

test('Test: Debe devolver el numero de letras de la palabra mas grande de la oracion', () => {
    expect(laPalabraMasLarga("No te preocupes si no funciona bien. Si todo lo que hizo lo hiciera, estarías sin trabajo.")).not.toBe(10);
});

test('Test: Debe devolver el numero de letras de la palabra mas grande de la oracion', () => {
    expect(laPalabraMasLarga("No te preocupes si no funciona bien. Si todo lo que hizo lo hiciera, estarías sin trabajo.")).toBe(9);
});

test('Test: Debe devolver el numero de letras de la palabra mas grande de la oracion', () => {
    expect(laPalabraMasLarga("En teoría, la teoría y la práctica son los mismos. En la práctica, no es")).not.toBe(1);
});

test('Test: Debe devolver el numero de letras de la palabra mas grande de la oracion', () => {
    expect(laPalabraMasLarga("Un lenguaje de programación es de bajo nivel cuando requiere que prestes atencion a lo irrelevante")).not.toBe(1);
});

test('Test: Debe devolver el numero de letras de la palabra mas grande de la oracion', () => {
    expect(laPalabraMasLarga("En mi máquina si funciona")).not.toBe(5);
});

test('Test: Debe devolver el numero de letras de la palabra mas grande de la oracion', () => {
        expect(laPalabraMasLarga("En mi máquina si funciona")).toBe(8);
});

test('Test: Debe devolver el numero de letras de la palabra mas grande de la oracion, verificar que aunque no sea una palabra completamente formada devuelva la cantidad', () => {
    expect(laPalabraMasLarga("Un lenkhjhjh jhkhjhhuyuygj")).toBe(13);
});

test('Test: Debe devolver el numero de letras de la palabra mas grande de la oracion, verificar que aunque contenga numeros devuelva la cantidad', () => {
    expect(laPalabraMasLarga("Uno requiere que12prestes atencion a lo irrelevante")).toBe("No se aceptan numeros");
});

test('Test: Debe devolver el numero de letras de la palabra mas grande de la oracion con caracteres', () => {
    expect(laPalabraMasLarga("Un lenguaje de 987@#%$#^%^1 a lo irrelevante")).toBe("No se aceptan numeros");
});

test('Test: Debe devolver el numero de letras de la palabra mas grande de la oracion,cuando hay espacios en la oracion', () => {
    expect(laPalabraMasLarga("Un       ")).toBe(2);
});

test('Test: Debe devolver el numero de letras de la palabra mas grande de la oracion, cuando hay espacios en la oracion', () => {
    expect(laPalabraMasLarga("Un       ")).not.toBe('');
});

test('Test: Debe devolver el numero de letras de la palabra mas grande de la oracion cuando esta vacio la oracion', () => {
    expect(laPalabraMasLarga("")).toBe(0);
});

test('Test: Debe devolver el numero de letras de la palabra mas grande de la oracion, con un solo numero', () => {
    expect(laPalabraMasLarga("0")).toBe("No se aceptan numeros");
});

test('Test: Debe devolver el numero de letras de la palabra mas grande de la oracion', () => {
    expect(laPalabraMasLarga("Un lenguaje de programación")).toBeLessThanOrEqual(12);
});

test('Test: Debe devolver el numero de letras de la palabra mas grande de la oracion', () => {
    expect(typeof laPalabraMasLarga("Un lenguaje de programación es de bajo nivel cuando requiere que prestes atencion a lo irrelevante")).not.toBe(Number);
});

test('Test: Debe devolver el numero de letras de la palabra mas grande de la oracion', () => {
    expect(laPalabraMasLarga("Un lenguaje de programación es de bajo nivel cuando requiere que prestes atencion a lo irrelevante")).not.toBe(1);
});

test('Test: Debe devolver el numero de letras de la palabra mas grande de la oracion', () => {
    expect(laPalabraMasLarga("U")).not.toBeNull();
});

test('Test: Debe devolver el numero de letras de la palabra mas grande de la oracion', () => {
    expect(typeof laPalabraMasLarga("Un lengua q2e prestes atencion a lo irrelevante")).toBe('string');
});