/**
 * 题目: 寻找两个有序数组的中位数
 */

 // 要求 : 时间复杂度 O(log (m + n))

 /**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let n1 = nums1.length;
    let n2 = nums2.length;
    let copy = [];
    // 鲁班性
    if(!n1) {
        if(n2 % 2 == 0) {
            let mid = n2 >> 1;
            return (nums2[mid - 1]+nums2[mid]) / 2;
        } else {
            let mid = Math.floor(n2/2);
            return nums2[mid];
        }
    }
    if(!n2) {
        if(n1 % 2 == 0) {
            let mid = n1 / 2;
            return ( (nums1[mid - 1]+nums1[mid]) / 2);
        } else {
            let mid = Math.floor(n1/2);
            return nums1[mid];
        }
    }
    if( n1 && n2 ) {
        let p1 = 0;
        let p2 = 0;
        while(p1 < nums1.length && p2 < nums2.length ) {
            if(nums1[p1] < nums2[p2]) {
                copy.push(nums1[p1]);
                p1++;
            } else {
                copy.push(nums2[p2]);
                p2++;
            }
        }
        if(!nums1[p1]) {
            while(p2 < nums2.length) {
                copy.push(nums2[p2]);
                p2++;
            }
        } 
        if(!nums2[p2]) {
            while(p1 < nums1.length) {
                copy.push(nums1[p1]);
                p1++;
            }
        }
    }
    if(copy.length % 2 == 0) {
        let mid  = copy.length / 2;
        return ((copy[mid - 1] + copy[mid]) / 2 ); 
    } else {
        let mid = Math.floor(copy.length /2);
        return copy[mid];
    }
};


let nums1 = [1,2];
let nums2 = [3,4]
console.log(findMedianSortedArrays(nums1,nums2));