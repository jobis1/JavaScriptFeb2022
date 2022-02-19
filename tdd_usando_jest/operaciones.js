const operaciones = {
  holaMundo: () => "Hola Mundo!",
  suma: (x, y) => x + y,
  cuentaLetras: (array1) => array1.map((s) => s.length),
  createUser: (nombre, password) => {
    const user = {
      name: nombre,
      pass: password,
    };
    return user;
  },
  minusculas: (objeto) => {
    if (typeof objeto === 'String' && objeto.match('^[a-zA-Z0-9 ]+$')) {
      return true;
    } else return false;
    console.log("Solo se aceptan Letras");
  },
};

module.exports = operaciones;
