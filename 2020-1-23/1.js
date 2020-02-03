function FindNumsAppearOnce(array)
{
    let len = array.length;
    if(len < 2) return null;
    let res = 0;
    for(let i = 0 ; i < len ; i++) {
        res = res ^ array[i];
    }
    let index = FindNumberOf1(res);
    let num1 = 0;
    let num2 = 0;
    for(let j = 0 ; j < len ; j ++) {
        if(isTrueOfIndex(array[j],index)) {
            num1 ^= array[j];
        } else {
            num2 ^= array[j];
        }
    }
    console.log(num1,num2)
    // return [num1,num2];
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
}

function FindNumberOf1(num) {
    let index = 0;
    while((num & 1) == 0) {
        index++;
        num  = num >> 1;
    }
    return index;
}

function isTrueOfIndex(num,index) {
    num >>= index;
    return (num & 1)? true : false;
}


let num = 2;
// console.log(num & 1)
// console.log(isTrueOfIndex(num,1))

// console.log(FindNumberOf1(num))

let arr = [1,1,2,2,3,4,5,5,6,6,7,7];
console.log(FindNumsAppearOnce(arr))
