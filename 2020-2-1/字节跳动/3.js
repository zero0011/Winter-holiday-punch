/**
 * 
 * @param {*} s 
 * @return {number} len
 */


function IsVaild(s,left,right) {
    if(s == null || s.length < 1) return true;
    let count = 0;
    for(let i = left ; i <= right ; i ++) {
        if(s[i] == '(') {
            count++;
        } else {
            if(count <= 0) return false;
            count--;
        }
    }
    return count == 0 ? true : false;
}

function IsVaild_max(s) {
    let len = s.length;
    let max = 0;
    for(let i = 0 ; i < len ; i++) {
        for(let j = 0 ; j < len ; j++) {
            if(IsVaild(s,i,j)) {
                res = j - i + 1;
                if(res > max) {
                    max = res;
                }
            }
        }
    }
    return max;
}

console.log(IsVaild_max("(()"))

