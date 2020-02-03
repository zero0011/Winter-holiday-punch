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

function GetLeastNumbers_Solution(input, k)
{
    let outPut = [];
    if(input.length == 0 || k <= 0 || k > input.length) return outPut;
    let start = 0;
    let end = input.length - 1;
    let index = Partition(input,start,end);
    while(index !== k - 1) {
        if(index > k - 1) {
            index = Partition(input,start,index - 1);
        } else {
            index = Partition(input,index + 1,end)
        }
    }
    for(let i = 0; i <= k - 1 ; i++) {
        outPut[i] = input[i]
    }
    return outPut;
}

let arr = [4,5,1,6,2,7,3,8]

console.log(GetLeastNumbers_Solution(arr,4))