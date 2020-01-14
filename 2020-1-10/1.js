/**
 * 给定一个排序数组, 你需要在原地删除重复出现的元素,使得每个元素只出现
 * 一次, 返回移除后数组的新长度
 * 
 * 空间复杂度 : O(1)
 */

 /**
  * 
  * @param {排序数组} nums 
  * @returns {新数组长度} length
  */

 


 function ArrayDeduplication(nums) {
     if(nums.length < 2) return nums.length;
    let copy = [];
    for(let i = 0 ; i < nums.length ; i++) {
        if(nums[i] !== nums[i+1]) {
            copy.push(nums[i]);
        }
    }
    return copy;
 }

 let nums = [0,0,0,1,1,2,2,3,3,4];
 let text = [1,1,2];
//  console.log(ArrayDeduplication(text))

 // 原地算法

 function Deduplication(nums) {
    if(nums.length < 2) return nums;
    let slow = 0;
    let fast = 0;
    while(fast < nums.length ) {
        if(nums[slow] === nums[fast]) {
            fast++;
        } else {
            slow++;
            nums[slow] = nums[fast];
        }
    }
    return slow + 1;
 }

 let len = Deduplication(nums);
 for(let i = 0 ; i < len; i++) {
     console.log(nums[i])
 }
 