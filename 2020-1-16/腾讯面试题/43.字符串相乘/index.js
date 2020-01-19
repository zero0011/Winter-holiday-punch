/**
 * 字符串相乘
 */

 /**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let number1 = parseInt(num1);
    let temp = number1;
    let number2 = parseInt(num2);
    for(let i = 1 ; i <= number2 ; i++) {
        number1 += temp;
    }
    console.log(number1)
};

let num1 = 2;
let num2 = 3;
console.log(multiply(num1,num2))