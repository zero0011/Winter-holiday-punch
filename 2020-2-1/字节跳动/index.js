function IsValid(str,start,end) {
    if(str == '') return true;
    let left = start;
    let right = end;
    while(left < right) {
        if(str[left] != str[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
}

// let str = "()"

// console.log(IsValid(str,0,str.length - 1))


function Longest_valid_parenthesis(str) {
    var start = 0;
    var end = str.length - 1;
    var flag ;
    flag = IsValid(str,start,end);
    console.log(flag)
    while(!flag) {
       flag = IsValid(str,start + 1,end);
       flag = IsValid(str,start , end - 1);
       flag = IsValid(str,start + 1, end - 1);
    }
    return flag ? end - start + 1: 0;
}

var str = ")()())";
console.log(Longest_valid_parenthesis(str))



function IsValid_upgrade(str) {
    if(str == '') return true;
    let left = 0;
    let right = str.length - 1;
    while(1) {
        
    }
}