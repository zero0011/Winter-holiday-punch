/**
 * 题目:
 *  数组中的第 k 个最大元素
 */


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function(nums, k) {
    nums.sort(function(a,b){
        return b - a;
    })
    return nums[ k - 1 ];
};


var findKthLargest1 = function(nums,k) {
    k--;
    let start = 0;
    let end = nums.length - 1;
    while(true) {
        let res = partion(nums,start,end);
        if(res == k) {
            return nums[res];
        } else if(res < k) {
            start = res + 1;
        } else if(res > k){
            end = res - 1;
        }
    }
}


var partion = function(nums,start,end) {
    let random = Math.floor(Math.random()*(end-start+1)+start);
    let pivot = nums[random];
    while(start < end) {
        while(nums[end] < pivot && start < end) {
            end --;
        }
        // 赋值
        nums[start] = nums[end];
        while(nums[start] >= pivot && start < end) {
            start++;
        }
        nums[end] = nums[start];
    }
    return start;
}

let nums = [1,2,3,4,5]
let k = 2;
console.log(findKthLargest1(nums,k))