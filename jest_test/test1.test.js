
//tarea
const impresion = require ('./impresion');

test("Validar que se imprima una cadena de test", ()=>{
expect(impresion.hola()).toBe("Hola Mundo");
}); 