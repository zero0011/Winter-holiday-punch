function Power1(base, exponent)
{
    if(base == 0) return 0;
    if(exponent == 0) return 1;
    let res = base;
    if(exponent > 0) {
        for(let i = 0 ; i < exponent - 1; i ++) {
            res = res * base;
        }
        return res;
    } else if(exponent < 0){
        exponent = -exponent
        for(let i = 0 ; i < exponent - 1 ; i++) {
            res = res * base;
        }
        return 1 / res ;
    }
}


let base = 2.5;
let exponent = -2;
let res = Math.pow(base , exponent);
// console.log(res)

// console.log(Power(base,exponent))



function getPower (base,exponent) {
    if(exponent == 1) return base;
    if(exponent == 0) return 1;
    if(base == 0) return 0;
    res = Power1(base, exponent >> 1);
    res *= res;
    if((exponent & 1) == 1) { // 如果是奇数
        res *= base;
    }
    return res;
}

function Power(base,exponent) {
    let flag = exponent < 0;
    if(flag) {
        exponent = -exponent
    }
    res = getPower(base,exponent);
    return flag ? 1 / res : res;
}

console.log(Power(base,exponent))