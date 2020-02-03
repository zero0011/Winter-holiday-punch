function PrintMinNumber(numbers) {
    let strs = [];
    let res = '';
    for(let i = 0 ; i < numbers.length ; i++) {
        strs.push(numbers[i].toString());
    }
    for(let i = 0 ; i < strs.length ;i ++) {
        for(let j = 0 ; j < strs.length - i ; j++) {
            let num1 = strs[j] + strs[j+1];
            let num2 = strs[j+1] + strs[j];
            if(num1 > num2) {
                temp = strs[j];
                strs[j] = strs[j+1];
                strs[j+1] = temp;
            }
        }
    }
    for(let item of strs) {
        res += item;
    }
    return parseInt(res)
}

/**
 * @description {获得最高比特位}
 */
function getMostBit(num,k) {
    let res ;
    while(num !== 0) {
        res = num % 10;
        num = Math.floor(num / 10);
    }
    return res;
}


function Bubble_Sort(arr) {
    for(let i = 0 ; i < arr.length ; i ++) {
        for(let j = 0 ; j < arr.length - i ; j++) {
            if(arr[j+1] < arr[j]) {
                temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

let arr = [9,12,21,5,100,312];

console.log(PrintMinNumber(arr))

