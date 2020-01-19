/**
 * 题目 :
 *  编写一个函数来查找字符串数组中的最长公共前缀
 * 如果不存在公共前缀 , 返回空字符串
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs,index) {
    let len = strs.length;
    for (var i = 0; i < len - 1; i++) {
        if (strs[i][index] !== strs[i + 1][index]) {
            return index - 1 === -1? '' : strs[0].slice(0,index);
        }
    }
    index++;
    return longestCommonPrefix(strs,index);
};

let strs = ["flower","flower","flower"]
console.log(longestCommonPrefix(strs,0))


var longestCommonPrefix1 = function(strs) {
    let len = strs.length;
    
}
