function Permutation(str)
{
    let res  = [];
    for(let i = 0 ; i < str.length ; i++) {
        for(let j = 0 ; j < str.length ; j ++) {
            for(let k = 0 ; k < str.length ; k ++) {
                if(str[i] !== str[j] && str[j] !== str[k] && str[k] !== str[i]) {
                    res.push(str[i] + str[j] + str[k]);
                }
            }
        }
    }
    return res;
}

// console.log(Permutation(str))

function Permutation1(str,start) {
    if(str == null) return ;
    if(str.length == 1 || str.length === 0) return str;
    if(start == str.length - 1) return str;
    for(let i = start ; i < str.length ; i++) {
        temp = str[i];
        str[i] = str[start];
        str[start] = temp;
        Permutation1(str, start + 1);
        temp = str[i];
        str[i] = str[start];
        str[start] = temp;
    }
}


let str = "abc";
console.log(Permutation1(str,0))
