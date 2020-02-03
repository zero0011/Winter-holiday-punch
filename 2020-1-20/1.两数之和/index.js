/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0 ; i < nums.length ; i++) {
        map.set(nums[i],i)
        let res = target - nums[i];
        if(map.has(res) && map.get(res) !== i) {
            return [map.get(res),i]
        }
    }
    // for(let i = 0 ; i < nums.length ; i ++) {
        
    // }
};

let nums = [3,2,4]
let target = 6;
console.log(twoSum(nums,target))