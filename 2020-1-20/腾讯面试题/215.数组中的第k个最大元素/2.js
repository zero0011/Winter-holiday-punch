/**
 * 快速排序
 */


 var quickSort = function(nums,index) {
     let pivot = nums[index];
     let start = 0;
     let end = nums.length - 1;
     while(start < end) {
         while(nums[end] >= pivot && start < end ) {
             end--;
         }
         // 赋值
         nums[start] = nums[end];
         while(nums[start] < pivot && start < end ) {
             start++;
         }
         nums[end] = nums[start];
     }
     nums[start] = pivot;
     return start;
 }

 let nums = [  2 , -2 ,1 , 0 , 3 ,-5 , 7 ];
//  nums.sort((a ,b)=>{
//      return a - b;
//  })
//  console.log(nums)
//  console.log(quickSort(nums,0))

var findKthLargest = function(nums, k) {
    
}