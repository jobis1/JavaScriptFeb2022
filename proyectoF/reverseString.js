
function reverseString(str) {

    if(typeof str === 'boolean' ){
        return 'boolean is not defined';
    }
    return str.split('').reverse().join('');
}

module.exports = reverseString;