/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    if(arr.length <= 3) return arr[0]
    let limit = (arr.length / 4);
    let map = new Map();
    let j;
    for(let i = 0 ; i < arr.length ; i ++) {
        if(!map.has(arr[i])) {
            j = 1;
            map.set(arr[i],j)
        } else {
            j++;
            map.set(arr[i],j);
            if(map.get(arr[i]) > limit) {
                return arr[i]
            }
        }
    }
};

let arr = [1]
console.log(findSpecialInteger(arr))