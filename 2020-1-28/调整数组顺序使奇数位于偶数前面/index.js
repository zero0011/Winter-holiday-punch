function reOrderArray(array)
{
    let start = 0;
    let end = array.length - 1;
    let temp ;
    while(start < end) {
        while((array[end] & 1) == 0 && start < end) { // 偶数
            end--;
        }
        if((array[end] & 1) == 1) {
            // 交换
            temp = array[end];
            array[end] = array[start];
            array[start] = temp;
        }
        while((array[start] & 1) == 1 && start < end) { // 奇数
            start++;
        }
        if((array[start] & 1) == 0) {
            temp = array[start];
            array[start] = array[end];
            array[end] = temp;
        }
    }
    return array;
}

let arr = [1,2,3,4,5];
// console.log(arr)
console.log(reOrderArray(arr))


function reOrderArray1(array) {
    let start = 0 ;
    let end = array.length - 1;
    let temp;
    while(start < end) {
        while((array[end] & 1) == 0 && start < end) {
            end--;
        }
        while((array[start] & 1) == 1 && start < end) {
            start++;
        }
        if((array[start] & 1) == 0 && array[end] & 1 == 1) {
            temp = array[start];
            array[start] = array[end];
            array[end] = temp;
        }
    }
    return array;
}

// console.log(reOrderArray1(arr))