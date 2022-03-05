function laPalabraMasLarga(str) {

  if (typeof str === Number){
    return "No se aceptan numeros";
  }
  let strArray = str.split(" ");
  let max = 0;
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i].length > max) max = strArray[i].length;
  }
  console.log(strArray);

  return max;
}

module.exports = laPalabraMasLarga;
