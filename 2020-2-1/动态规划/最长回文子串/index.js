/**
 * @description {暴力枚举}
 * @param {string} s
 * @return {string}
 */
var longestPalindrome1 = function(s) {
    let n = s.length;
    let max = 0;
    let left , right;
    for(let i = 0 ; i < n ; i ++) {
        for(let j = 0 ; j < n ; j ++) {
            if(IsPalindrome(s,i,j)) {
                let len = j - i + 1;
                if(len > max) {
                    max = len;
                    left = i;
                    right = j;
                }
            }
        }
    }
    return s.slice(left , right + 1);
};

function IsPalindrome(str,left,right) {
    while(left < right) {
        if(str[left] == str[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
}


/**
 * @description {动态规划}
 * @param {string} s 
 * @return {string} 
 */

var longestPalindrome = function(s,left,right) {
    
};