
function largestOfFour(arr) {
  let result=[];
  for(let i=0;i<arr.length;i++){
    let max=Math.max(...arr[i]);
    result.push(max);
  }
  return result;
}


module.exports=largestOfFour;
