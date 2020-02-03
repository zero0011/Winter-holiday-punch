function FindNumbersWithSum(array, sum)
{
    let left = 0;
    let right = array.length - 1;
    while(left < right) {
        let res = array[left] + array[right];
        if(res == sum) {
            return [left,right]
        } else if(res < sum) {
            left++;
        } else if(res > sum) {
            right--;
        }
    }
}

let arr = [1,2,3,4,5,6];
let sum = 7;
console.log(FindNumbersWithSum(arr,sum))