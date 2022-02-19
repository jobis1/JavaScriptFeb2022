const functions = {
  isFunction: (yourFunctionName) => {
    if (typeof yourFunctionName == "function") {
       return   yourFunctionName;
    }
    return undefined;
  },
  anagram: (palabra1, palabra2) => {
    palabra1 = palabra1.toLowerCase().replace(/[\W_]+/g, "");
    palabra2 = palabra2.toLowerCase().replace(/[\W_]+/g, "");
    // sorting
    const stringASorted = palabra1.split("").sort().join("");
    const stringBSorted = palabra2.split("").sort().join("");
    return stringASorted === stringBSorted;
  },
  reversestring: (str) => {
    return str.split("").reverse().join("");
  },
  add: (x, y) => {
    return x + y;
  },
  createUser: (firstName, lastName) => {
    const user = {
      firstName: firstName,
      lastName: lastName,
    }
    return user;
  },
  fetchUser:()=>{
      const data = {
          name:'Leanne Graham'
        }
      return data;
  }
} 


module.exports = functions;
