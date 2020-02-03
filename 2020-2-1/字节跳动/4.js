var longestValidParentheses = function(s) {
    if(s == null || s.length <= 1) return 0;
    let len = s.length;
    const stack = [];
    stack.push(-1);
    let count = 0;
    for( let i = 0 ;i < len ; i ++) {
        if(s[i] == '(') {
            stack.push(i);
        } else {
            stack.pop();
            if(!stack.length) {
                stack.push(i)
            } else {
                count = Math.max(count , i - stack[stack.length - 1]);
            }
        }
    }
    return count;
}

console.log(longestValidParentheses(")()())"))