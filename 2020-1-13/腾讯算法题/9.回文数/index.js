/**
 * 题目 :
 *  判断一个整数是否是回文数。
 *  回文数 是指 正序 (从左向右) 和 倒序 (从右向左) 读都是一样的整数
 */

var isPalindrome = function(x) {
    let str = x.toString();
    let start = 0 ;
    let end = str.length - 1;
    while(start <= end) {
        if(str[start] === str[end]) {
            start++;
            end--;
        } else {
            return false;
        }
    }
    return true;
};

let num = 10;
// console.log(isPalindrome(num))


// 解法2
// 不用 转换为 字符串

/**
 * 1. 如果是负数则一定不是回文数 , 直接返回
 * 2. 如果是正数 , 则将其倒序值计算出来, 然后比较和原数是否相等
 * 3. 如果是回文数则相等 返回 true, 如果不是则返回 false
 */
var isPalindrome2 = function(x) {
    if(x < 0) return false;
    let cur = 0;
    let num = x;
    while(num !== 0) {
        cur = cur * 10 + num % 10;
        num /= 10;
    }
    return cur === x;
}

console.log(isPalindrome2(11211))