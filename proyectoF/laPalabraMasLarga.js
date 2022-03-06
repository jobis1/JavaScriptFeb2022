
function laPalabraMasLarga(str) {
 
  if (/\d/.test(str)){
    return "No se aceptan numeros";
  } else {

    let strArray = str.split(" ");
  let max = 0;
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i].length > max) max = strArray[i].length;
  }
  console.log(strArray);
  return max;
  }
}

module.exports = laPalabraMasLarga;
