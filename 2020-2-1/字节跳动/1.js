/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s == null || s.length < 1) return true;
    let map = new Map([
        ["(" , ")"],
        ["{" , "}"],
        ["[" , "]"]
    ])
    const stack = [];
    let n = s.length;
    for(let i = 0 ; i < n ; i++) {
        let str = s[i];
        if(map.has(str)) {
            stack.push(str);
        } else { // 在 values 中
            if(stack.length == 0) return false;
            let top = stack[stack.length - 1]
            if(str == map.get(top)) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length > 0 ? false : true;
};

let s = "{]}"
let res =isValid(s)
console.log(res)