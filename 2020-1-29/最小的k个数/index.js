function Partition(array,start,end) {
    let target = array[start];
    while(start < end) {
        while(array[end] > target && start < end) {
            end--;
        }
        array[start] = array[end];
        while(array[start] <= target && start < end) {
            start++
        }
        array[end] = array[start];
    }
    array[start] = target;
    return start;
}

function quick_sort(arr,start,end) {
    if(arr == null) return;
    if( start > end ) return;
    let index = Partition(arr,start,end);
    quick_sort(arr,start,index - 1);
    quick_sort(arr,index + 1, end);
    return arr;
}

// let arr = [4,3,2,1,5,6,7,0];
// quick_sort(arr,0,arr.length -1)
// console.log(arr)


function GetLeastNumbers_Solution(input, k) {
    let start = 0;
    let end = input.length - 1;
    let res = [];
    let index = Partition(input , start ,end);
    while(index !== k - 1) {
        if(index < k - 1) {
            index = Partition(input, index + 1, end);
        } else if(index > k - 1) {
            index = Partition(input, start, index - 1);
        }
    }
    for(let i = 0 ; i <= index ; i ++) {
        res.push(input[i])
    }
    return res.sort((a,b)=>{
        return a - b;
    });
}

let arr = [4,3,2,1,5,6,7,0];
console.log(GetLeastNumbers_Solution(arr,5))