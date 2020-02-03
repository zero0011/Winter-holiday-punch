function replaceSpace(str)
{
    for(let i = 0 ; i < str.length ; i++) {
        if(str[i] === ' ') {
            str[i] = "%";
        }
    }
    return str;
}

let str = "We Are Happy";
let res =  replaceSpace(str);
console.log(res)