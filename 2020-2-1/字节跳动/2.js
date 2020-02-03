function IsVaild(s) {
    if(s == null || s.length < 1) return true;
    let count = 0;
    let n = s.length;
    for(let i = 0 ; i < n ; i ++) {
        if(s[i] == '(') {
            count++;
        } else {
            if(count <= 0) return false;
            count--;
        }
    }
    return count == 0 ? true : false;
}

