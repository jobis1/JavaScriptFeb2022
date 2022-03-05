const { boolean } = require("yargs");

//Instrucciones: Revisar que las pruebas pasen, corregir las pruebas y hacer ajustes en esta función para que haga las validaciones que eestan en las pruebas
function convertir(celsius) {
  if (typeof celsius === 'string') {
    return "No podemos usar strings";
  } else if (celsius === true || celsius ===false) {
    return "No podemos procesar valores Boleanos";
  } else {
    let fahrenheit = (celsius * 9) / 5 + 32;
    return fahrenheit;
  }
}
module.exports = convertir;
