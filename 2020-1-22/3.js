function MoreThanHalfNum_Solution(numbers)
{
    let len = numbers.length;
    let start = 0;
    let end = len - 1;
    let index = Partition(numbers,start,end);
    let res;
    let mid = len >> 1;// 除 2 并 向下取整
    let count = 0;
    while(true) {
        if(index == mid) {
            res = numbers[index];
            break;
        } else if(index < mid) {
            index = Partition(numbers,index + 1,end)
        } else if(index > mid) {
            index = Partition(numbers,start,index - 1)
        }
    }
    for(let i = 0 ; i < numbers.length ; i ++) {
        if(numbers[i] == res) {
            count++;
        }
    }
    return count > mid ? res : 0;
}


function Partition(data,start,end) {
    let len = data.length;
    if(data == null || start < 0 || end >= len) return;
    // let index = Math.floor(Math.random() * (end - start) + start);
    let index = start;
    let target = data[index];
    let left = start;
    let right = end;
    while(left < right) {
        while(left < right && data[right] >= target) {
            right--;
        }
        data[left] = data[right];
        while(left < right && data[left] < target) {
            left ++;
        }
        data[right] = data[left];
    }
    data[left] = target;
    return left;
}

let data = [1,2,3,2,2,2,5,4,2]
// console.log(Partition(data,0,data.length - 1))

console.log(MoreThanHalfNum_Solution(data))