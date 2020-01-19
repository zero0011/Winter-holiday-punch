/**
 * 搜索旋转排序数组
 */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function(nums, target) {
    for(let i = 0 ; i < nums.length ; i++) {
        if(nums[i] === target) {
            return i;
        }
    }
    return -1;
};


// 二分法  时间复杂度 O(log n)

var search1 = function(nums,target) {
    let start = 0;
    let end = nums.length - 1;
    while(start <= end) {
        let mid = nums[Math.floor((start + end) / 2)];
        if(target === nums[mid]) {
            return mid;
        } else if(target < nums[mid]) {
            end = mid - 1;
        } else if(target > nums[mid]) {
            start = mid + 1;
        }
    }
    return -1;
}


// console.log(search1(arr,0))


/**
 * @description {}
 * @param {*} nums 
 * @param {*} target 
 */

var search2 = function(nums,target) {
    if(nums.length === 0) return -1;
    var index = 0;
    for(let i = 0 ; i < nums.length ; i ++) {
        if(nums[i] > nums[i + 1]) {
            index = i;
            break;
        }
    }
    var start = 0;
    var end = index;
    while(start <= end) {
        // 求平均数
        let mid = (start & end) + ((start^end) >> 1);
        if(target === nums[mid]) {
            return mid;
        } else if(target < nums[mid]) {
            end = mid - 1;
        } else if(target > nums[mid]) {
            start = mid + 1;
        }
    }
    start = index + 1;
    end = nums.length - 1;
    while(start <= end) {
        // 求平均数
        let mid = (start & end) + ((start^end) >> 1);
        if(target === nums[mid]) {
            return mid;
        } else if(target < nums[mid]) {
            end = mid - 1;
        } else if(target > nums[mid]) {
            start = mid + 1;
        }
    }
    return -1;
}

let arr = [2]
console.log(search2(arr,3))
