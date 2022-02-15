//primeras pruebas

test("Validar el texto de un aconstante", ()=>{
    const hola = "Hola mundo";
    expect(hola).toBe("Hola mundo")
});

test("Validar que la suma numeros flotantes",()=>{
    var resultado = 0.2 + 0.4;
   // expect(resultado).toBe(0.6);
    //expect(resultado).toEqual(0.6);
    expect(resultado).toBeCloseTo(0.6);
});

test("Validar que esta cadena no contiene la letra U",()=>{ 
    expect("Wiliberto").not.toMatch(/U/);
});