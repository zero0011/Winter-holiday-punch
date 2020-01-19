/**
 * 时间复杂度 为 O(log(m + n)) 的解法
 */

 // 获得中位数
 function getMiddle (arr) {
     let len = arr.length;
     if(len % 2 == 0) {
         let mid = len / 2;
         return ((arr[mid - 1] + arr[mid]) / 2);
     } else {
         let mid = Math.floor(len / 2);
         return arr[mid];
     }
 }

 let arr = [2,1,3,4,6,3,11,10,9];
 arr.sort(function(a, b) {
     return a - b;
 })
 let res = getMiddle(arr);
 console.log(arr)
 console.log(res)
 