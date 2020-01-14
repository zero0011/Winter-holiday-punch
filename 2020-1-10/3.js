/**
 * 快速排序 
 * 简单写法
 */

 var partition = function(nums,x) {
     let less = [];
     let more = [];
     for(let i = 0 ; i < nums.length ; i ++) {
         if(nums[i] < x) {
            less.push(nums[i])
         } else if(nums[i] >= x) {
            more.push(nums[i])
         }
     }
     return less.concat(more)
 }

 let x = 3
//  console.log(partition(nums,x))



// 快速排序1

var quickSort = function(nums) {
    if(nums.length == 0) return nums;
    let index = nums[0];
    let left = [];
    let right = [];
    for(let i = 1 ; i < nums.length ; i ++) {
        if(nums[i] < index) {
            left.push(nums[i])
        } else if(nums[i] >= index) {
            right.push(nums[i])
        }
    }
   return quickSort(left).concat([index],quickSort(right))
}



var createData = function(len) {
    let arr = [];
    for(let i = 0 ;i < len ;i ++) {
        let item = Math.floor(Math.random() * len);
        arr.push(item);
    }
    return arr;
}



/**
 * @description {快速排序最终版本}
 * @param {快速排序} nums 
 * @returns {Array} res
 */

var quickSort_last = function(nums,low,high) {
    if(low < high) {
        //  寻找基准数据的正确索引
        let index = getIndex(nums,low,high);

        // 进行对 index 之前的数组 和 之后的数组进行相同的操作 ,使得整个数组变得有序
        quickSort_last(nums, 0 , index - 1);
        quickSort_last(nums, index + 1, high);
    }
    return nums;
}


var getIndex = function(arr,low,high) {
    // 基准数据
    let temp = arr[low];
    while(low < high) {
        // 当队尾的元素大于等于基准数据时 , 向左移动 high指针
        while(low < high && arr[high] >= temp) {
            high--;
        }
        // 如果队尾元素大于 temp , 需要将其赋值给 low
        arr[low] = arr[high];
        // 当对首元素小于 temp 时 , 向右移动 low指针
        while(low < high && arr[low] <= temp) {
            low ++;
        }
        // 当对首元素大于 tmep 时 , 需要将其赋值为 high
        arr[high] = arr[low]
    }
    // 跳出循环时 low 和 high 相等 , 此时的 low 或 high 就是temp 的正确位置
    // 把 temp 赋值为 arr[low]
    arr[low] = temp;
    return low; // 返回 temp 的正确位置
}

// let arr = [3,2,1,4,-2,3];
// console.log(quickSort_last(arr,0,arr.length -1))

let data = createData(1000000);

console.time('Sorttime');
console.log(quickSort_last(data,0,data.length -1));
console.timeEnd('Sorttime');